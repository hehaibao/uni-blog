<template>
	<div class="main">
		<span class="navigation-name">在线工具</span>
		<div class="main-max-width post-list">
			<template v-for="item in toolArr" :key="item.name">
				<span class="tit">{{item.name}}</span>
				<el-row :gutter="12">
					<el-col :span="6" v-for="list in item.list" :key="list.name">
						<el-tooltip
						  effect="dark"
						  :content="list.desc"
						  placement="right"
						>
						  <el-link :href="list.url" target="_blank">{{list.name}}</el-link>
						</el-tooltip>
						<el-tag v-if="list.isSelf" type="warning" size="small">自创</el-tag>
					</el-col>
				</el-row>
			</template>
		</div>
	</div>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'

onLoad(options => {
	// 激活右边菜单
	uni.$emit('setRightStyle', {
		type: 'putRightMenuActiveKey',
		data: '在线工具'
	})
})

// 工具列表
const toolArr = [
	{
		name: '丨前端工具',
		list: [
			{
				name: 'js格式化',
				desc: 'JS混淆/解混淆、JS格式化/压缩',
				url: '/#/pages/front/webview?src=/static/tools/js/index.html',
				isSelf: true
			},
			{
				name: 'css格式化',
				desc: 'css横排竖排转换工具',
				url: '/#/pages/front/webview?src=/static/tools/css/index.html',
				isSelf: true
			},
			{
				name: 'Codepen',
				desc: '在线编辑HTML/CSS/JS，并有很多酷弦的特效代码',
				url: 'https://codepen.io/',
				isSelf: false
			},
			{
				name: 'Screensiz.es',
				desc: '移动屏幕尺寸',
				url: 'https://screensiz.es/',
				isSelf: false
			},
			{
				name: 'Mock.js',
				desc: '生成随机数据，拦截 Ajax 请求',
				url: 'http://mockjs.com/',
				isSelf: false
			},
			{
				name: 'Can I use',
				desc: '前端兼容性自查',
				url: 'https://caniuse.com/',
				isSelf: false
			},
			{
				name: 'TinyPNG',
				desc: '图片压缩工具',
				url: 'https://tinypng.com/',
				isSelf: false
			},
			{
				name: 'Regular Expressions',
				desc: '在线正则表达式工具',
				url: 'https://regex101.com/',
				isSelf: false
			},
		]
	},
	{
		name: '丨矢量图标',
		list: [
			{
				name: '阿里图标库',
				desc: '阿里巴巴矢量图标库',
				url: 'https://www.iconfont.cn/',
				isSelf: false
			},
			{
				name: 'Font Awesome',
				desc: '一套绝佳的图标字体库和CSS框架',
				url: 'https://www.iconfont.cn/',
				isSelf: false
			},
			{
				name: 'Fontello',
				desc: '图标字体制作工具',
				url: 'https://fontello.com/',
				isSelf: false
			},
		]
	},
	{
		name: '丨其他',
		list: [
			{
				name: '加水印',
				desc: '身份证件加水印',
				url: '/#/pages/front/webview?src=/static/tools/shuiyin/index.html',
				isSelf: true
			},
			{
				name: '自动排版',
				desc: '在线文字自动排版工具',
				url: '/#/pages/front/webview?src=/static/tools/paiban/index.html',
				isSelf: true
			}
		]
	}
]

</script>

<style lang="scss">
.navigation-name {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	line-height: 30px;
}
.post-list {
	width: 100%;
	margin-top: 30px;
	padding-bottom: 20px;
	flex-grow: 1;
	.tit {
		font-weight: bold;
		letter-spacing: 2px;
		margin: 15px 0;
		display: inline-block;
		background: linear-gradient(to bottom,transparent 60%,rgba(189,202,219,.3) 0) no-repeat;
		color: #666;
	}
	.el-link {
		color: #92AFC7;
		margin-bottom: 15px;
	}
	.el-tag {
		vertical-align: top;
		margin-left: 3px;
	}
}
</style>
