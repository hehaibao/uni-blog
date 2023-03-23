'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database().collection('labels')
	
	if (!event.name) {
		return { msg: '标签名称不能为空', code: 1 }
	}

	// 避免重复，先删除试试	
	// await db.where({ name: event.name }).remove()

	const data = {
		name: event.name,
		created_date: new Date().getTime(),
	}
	
	let res = null
	if (event._id) {
		res = await db.doc(event._id).update(data)
	} else {
		res = await db.add(data)
	}
	
	return { data: res, code: 0 }
}
