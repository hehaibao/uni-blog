import { TachometerAlt, Table, Bars, Tags, Link } from '@vicons/fa'

export const menus = {
	index: {
		label: '控制台',
		page: 'pages/admin/index',
		icon: h(TachometerAlt),
	},
	posts: {
		label: '文章管理',
		page: 'pages/admin/posts',
		icon: h(Bars)
	},
	categorys: {
		label: '分类管理',
		page: 'pages/admin/categorys',
		icon: h(Table)
	},
	labels: {
		label: '标签管理',
		page: 'pages/admin/labels',
		icon: h(Tags)
	},
	links: {
		label: '友链管理',
		page: 'pages/admin/links',
		icon: h(Link)
	},
}
