'use strict';
exports.main = async function(event, context) {
	const db = uniCloud.database()
	const dbCmd = db.command
	const rep = new RegExp(event.inputValue)

	let total = 0

	let where = {
		is_del: event.is_del || false
	}
	
	let sortField = 'updated_date'
	let sortVal = 'desc'
	if (event.sortValue) {
		// 根据排序字段获取
		switch(event.sortValue) {
			case 1:
				sortField = 'updated_date'
				sortVal = 'asc'
			break
			case 2:
				sortField = 'page_view'
				sortVal = 'desc'
			break
			case 3:
				sortField = 'page_view'
				sortVal = 'asc'
			break
			default:
				sortField = 'updated_date'
				sortVal = 'desc'
			break
		}
	}
	
	if (event.status) {
		where.status = event.status // 根据状态获取
	}
	if (event.category && event.category !== '首页') {
		where.categorys = event.category // 根据分类获取
	}
	if (event.label) {
		where.labels = event.label // 根据标签获取
	}
	if (event.inputValue) {
		where.title = rep // 根据输入的名称搜索
	}
	if (event.typeValue == 1) {
		// 文章类型，包含了没有type字段的 都默认是文章
		where.type = dbCmd.or([
			{type: dbCmd.exists(false)},
			{type: 1}
		])
	} else {
		// 除了文章的类型
		where.type = event.typeValue
	}

	let res = await db
		.collection('posts')
		.skip((event.currentPage - 1) * event.pageSize)
		.limit(event.pageSize)
		.orderBy('sort', 'desc')
		.orderBy(sortField, sortVal)
		.field(event.fidld)
		.where(where)
		.get()
	
	if (event.currentPage === 1) {
		let count = await db.collection('posts').where(where).count()
		total = count.total
	}
	
	return { data: { list: res.data, total: total }, code: 0 }
}
