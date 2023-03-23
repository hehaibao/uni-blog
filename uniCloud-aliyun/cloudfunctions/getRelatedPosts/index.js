'use strict';
exports.main = async function(event, context) {
	const db = uniCloud.database()
	const dbCmd = db.command

	let res = await db
		.collection('posts')
		.limit(event.pageSize)
		.orderBy('sort', 'desc')
		.orderBy('created_date', 'desc')
		.field(event.fidld)
		.where({
			_id: dbCmd.not(dbCmd.eq(event.id)),
			is_del: false,
			status: 1,
			labels: event.label
		})
		.get()
	
	return { data: res.data, code: 0 }
}
