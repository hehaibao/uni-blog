<!-- 前台 左侧窗体 -->
<template>
	<div>
		<div class="right-window" :class="{ hide: !showMenu }">
			<!-- logo -->
			<div class="logo">
				<a href="/"><el-image fit="contain" src="../static/images/logo.jpg"></el-image></a>
			</div>
			<!-- 导航 -->
			<template v-if="store.categorys.length > 0">
				<right-menu @select="select" :activeKey="activeKey" />
			</template>
			<!-- 搜索 -->
			<div class="search-box">
				<el-input placeholder="搜索文章" :prefix-icon="Search" clearable v-model="searchTxt" />
				<el-button type="primary" @click="search">搜索</el-button>
			</div>
			<!-- 标签 -->
			<template v-if="store.labels.length > 0">
				<el-divider content-position="left">标签云</el-divider>
				<div class="tag-box">
					<el-tag @click="clickLabel(item.name)" :type="activeKey === item.name ? '' : 'info'" v-for="item in store.labels">{{ item.name }}</el-tag>
				</div>
			</template>
			<!-- 底部 -->
			<div class="footer">
				<a class="link" href="https://beian.miit.gov.cn/" target="_blank" type="primary">@{{ siteYear }} {{ siteNumber }}</a>
				<div class="desc">本站基于uni-app+uniCloud纯前端开发</div>
			</div>
		</div>
		<!-- 小屏幕显示菜单按钮 -->
		<match-media v-if="!showMenu" :max-width="768">
			<div class="left-icon">
				<Icon color="#a6a6a6" :size="28"><ChevronCircleRight @click="showRightMenu" /></Icon>
			</div>
		</match-media>
		<!-- 抽屉遮罩 -->
		<bg-cover :show="showCover && showMenu" :top="60" @click="showMenu = false" />
	</div>
</template>

<script setup>
import { useStore } from '@/stores/index.js'
import { Icon } from '@vicons/utils'
import { ChevronCircleRight, Search } from '@vicons/fa'
import rightMenu from './components/rightMenu.vue'
import { siteYear, siteNumber } from '@/utils/site.js'

const searchTxt = ref('')
const store = useStore()

uni.$on('setRightStyle', obj => {
	if (obj.type === 'showRightMenu') {
		showMenu.value = obj.data.showMenu
		showCover.value = obj.data.showCover
	}
	if (obj.type === 'putRightMenuActiveKey') {
		activeKey.value = obj.data
	}
})

const showMenu = ref(false)
const showCover = ref(false)
const activeKey = ref('')

const showRightMenu = () => {
	showMenu.value = true
	showCover.value = true
}

const select = () => {
	if (showCover.value) {
		showMenu.value = false
	}
}

const clickLabel = name => {
	select()
	router.redirectTo(`front/news?label=${name}`)
}

const search = () => {
	router.redirectTo(`front/news?inputVal=${encodeURIComponent(searchTxt.value)}`)
}

</script>

<style lang="scss">
.right-window {
	z-index: 333;
	position: fixed;
	top: 0;
	left: 0;
	width: 270px;
	height: 100vh;
	box-shadow: 0 0 10px 4px #ccc;
	background-color: #fff;
	transition: left 0.2s ease;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	&.hide {
		left: -270px;
	}
	.el-divider {
		margin: 40px 0 30px;
	}
	.el-menu {
		border-right: 0 none;
	}
	.logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px 15px;
		.el-image {
			height: 120px;
			margin: 0 auto;
		}
	}
	.search-box {
		width: 90%;
		margin: 20px auto 0;
		text-align: center;
		.el-input {
			width: 175px;
			margin-right: 3px;
		}
	}
	.tag-box {
		margin: 0 10px;
		display: flex;
		flex-wrap: wrap;
		.el-tag {
			cursor: pointer;
			margin: 3px 3px 0 0;
			box-shadow: -4px -4px 10px #fcfcfc;
			transition: all .3s;
			&:hover {
				background-color: #fcfcfc;
			}
		}
	}
	.footer {
		padding: 30px 10px;
		text-align: center;
		.link {
			text-decoration: none;
			color: #333333;
			font-size: 13px;
		}
		.desc {
			width: 100%;
			font-size: 12px;
			color: #999;
		}
	}
}
.left-icon {
	z-index: 99999;
	display: flex;
	align-items: center;
	position: fixed;
	top: 15px;
	left: 10px;
	cursor: pointer;
	opacity: 0.6;
}
</style>
