'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database().collection('links')
	
	if (!event.name) {
		return { msg: '链接名称不能为空', code: 1 }
	}
	if (!event.link) {
		return { msg: '链接地址不能为空', code: 1 }
	}

	const data = {
		name: event.name,
		link: event.link,
		created_date: new Date().getTime(),
		isApproved: event.isApproved || false
	}
	
	let res = null
	if (event._id) {
		res = await db.doc(event._id).update(data)
	} else {
		res = await db.add(data)
	}
	
	return { data: res, code: 0 }
}
