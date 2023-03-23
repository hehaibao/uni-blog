import { Bold, Underline, Italic, Strikethrough, Heading, QuoteLeft, ListOl, ListUl, Minus, Mixer, Code, Link, Image, Subscript, Superscript, FileImage } from '@vicons/fa'

export const tools = [{
		icon: h(Bold),
		start: '**',
		end: '**',
		title: '字体加粗'
	},
	{
		icon: h(Underline),
		start: '<u>',
		end: '</u>',
		title: '下划线'
	},
	{
		icon: h(Italic),
		start: '*',
		end: '*',
		title: '斜体'
	},
	{
		icon: h(Strikethrough),
		start: '~~',
		end: '~~',
		title: '删除线'
	},
	{
		icon: h(Heading),
		title: '标题',
		list: [{
				name: '一级标题',
				start: '# '
			},
			{
				name: '二级标题',
				start: '## '
			},
			{
				name: '三级标题',
				start: '### '
			},
			{
				name: '四级标题',
				start: '#### '
			},
			{
				name: '五级标题',
				start: '##### '
			},
			{
				name: '六级标题',
				start: '###### '
			}
		]
	},
	{
		icon: h(QuoteLeft),
		start: '> ',
		title: '引用'
	},
	{
		icon: h(ListOl),
		start: '1. ',
		title: '有序列表'
	},
	{
		icon: h(ListUl),
		start: '- ',
		title: '无序列表'
	},
	{
		icon: h(Minus),
		start: '\n------------\n',
		title: '分割线'
	},
	{
		icon: h(Mixer),
		start: '`',
		end: '`',
		title: '删除线'
	},
	{
		icon: h(Code),
		start: '```language\n',
		end: '\n```',
		title: '代码'
	},
	{
		icon: h(Link),
		show: 'link',
		title: '添加链接'
	},
	{
		icon: h(Image),
		show: 'image',
		title: '添加图片',
	},
	{
		icon: h(FileImage),
		show: 'images',
		title: '附件库',
	},
	{
		icon: h(Subscript),
		start: 'A~b~',
		title: '原子个数'
	},
	{
		icon: h(Superscript),
		start: 'A^b^',
		title: '立方'
	},
]
