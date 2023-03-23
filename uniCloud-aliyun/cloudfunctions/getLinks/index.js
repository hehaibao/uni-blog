'use strict';
exports.main = async function(event, context) {
	const db = uniCloud.database()
	
	let where = {}
	if (event.isApproved) {
		where.isApproved = true
	}
	
	let res = await db.collection('links').where(where).get()
	
	return { data: res.data, code: 0 }
}
