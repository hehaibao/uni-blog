<!-- 前台 左侧菜单 -->
<template>
	<el-menu :default-active="props.activeKey" @select="handleSelect">
		<template v-for="menu in menus">
			<el-menu-item v-if="menu.name !== '文章分类'" :index="menu.name">
				<Icon :size="16"><component :is="menu.icon" /></Icon>
				<span class="menu-name">{{ menu.name }}</span>
			</el-menu-item>
			<el-sub-menu v-else-if="store.categorys.length > 0" :index="menu.name">
				<template #title>
					<Icon :size="16"><component :is="menu.icon" /></Icon>
					<span class="menu-name">{{ menu.name }}</span>
				</template>
				<el-menu-item v-for="category in store.categorys" :index="category.name">
					<span class="menu-name">{{ category.name }}</span>
				</el-menu-item>
			</el-sub-menu>
		</template>
	</el-menu>
</template>

<script setup>
import { Icon } from '@vicons/utils'
import { useStore } from '@/stores/index.js'
import { HouseDamage, Tools, KissWinkHeart, Megaport, MoneyBillWave } from '@vicons/fa' // https://www.xicons.org/#/

const props = defineProps({
	activeKey: String
})
const emit = defineEmits(['select'])

const store = useStore()

const menus = [
	{
		name: '首页',
		icon: h(HouseDamage)
	},
	{
		name: '文章分类',
		icon: h(Megaport)
	},
	{
		name: '我的项目',
		icon: h(MoneyBillWave)
	},
	{
		name: '在线工具',
		icon: h(Tools)
	},
	{
		name: '友情链接',
		icon: h(KissWinkHeart)
	}
]

const handleSelect = key => {
	emit('select')
	let link = ''
	switch (key) {
		case '首页':
			link = 'front/news'
		break
		case '我的项目':
			link = 'front/project'
		break
		case '在线工具':
			link = 'front/tools'
		break
		case '友情链接':
			link = 'front/links'
		break
		default:
			link = `front/news?category=${key}`
		break
	}
	router.redirectTo(link)
}
</script>

<style lang="scss">
.el-menu-item {
	&.is-active,
	&:hover {
		color: #4F88CF;
		background: rgba($color: #daebff, $alpha: 0.2);
	}
	.menu-name {
		font-size: 15px;
	}
}
.el-menu {
	.xicon {
		margin-right: 10px;
	}
}
</style>
