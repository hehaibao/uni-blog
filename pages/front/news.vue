<template>
	<div class="main">
		<div class="filter-box">
			<el-tooltip effect="dark" content="按更新时间升序" placement="bottom-end">
				<span class="icon" :class="{'active': sort == 0}" @click="sortBy(0)"><Icon color="#666666"><SortAmountUp /></Icon></span>
			</el-tooltip>
			<el-tooltip effect="dark" content="按更新时间降序" placement="bottom-end">
				<span class="icon" :class="{'active': sort == 1}" @click="sortBy(1)"><Icon color="#666666"><SortAmountDown /></Icon></span>
			</el-tooltip>
			<el-tooltip effect="dark" content="按浏览量升序" placement="bottom-end">
				<span class="icon" :class="{'active': sort == 2}" @click="sortBy(2)"><Icon color="#666666"><SortNumericUp /></Icon></span>
			</el-tooltip>
			<el-tooltip effect="dark" content="按浏览量降序" placement="bottom-end">
				<span class="icon" :class="{'active': sort == 3}" @click="sortBy(3)"><Icon color="#666666"><SortNumericDown /></Icon></span>
			</el-tooltip>
		</div>
		<span class="navigation-name">{{ label || category }}</span>
		<div class="main-max-width post-list" v-loading="loading">
			<template v-if="list.length > 0">
				<postItem :item="item" v-for="item in list" @lock="lock" />
				<!-- 分页 -->
				<bg-pagination v-model:pagination="pagination" @pageChange="getList" />
			</template>
			<el-empty v-else-if="!loading" description="这里暂时没有数据～"></el-empty>
		</div>
		<!-- 加密文章输入密码弹框 -->
		<el-dialog v-model="showLock" title="这篇文章加密啦~" width="300px" top="30vh" destroy-on-close>
			<el-input v-model="password" placeholder="请输入访问密码"></el-input>
			<template #footer>
				<el-button @click="showLock = false">取消</el-button>
				<el-button type="primary" :disabled="!password" @click="unlock">确认</el-button>
			</template>
		</el-dialog>
	</div>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { decode } from '@/utils/endeCode.js'
import { Icon } from '@vicons/utils'
import { SortNumericUp, SortAmountDown, SortAmountUp, SortNumericDown } from '@vicons/fa'
import postItem from './components/postItem.vue'

// 根据路由判断当前分类
const category = ref('')
const label = ref('')
const searchTxt = ref('')
const sort = ref(0)
onLoad(options => {
	category.value = options.category || ''
	label.value = options.label
	searchTxt.value = options.inputVal ? decodeURIComponent(options.inputVal) : ''
	// 激活右边菜单
	uni.$emit('setRightStyle', {
		type: 'putRightMenuActiveKey',
		data: label.value || category.value
	})
	getList()
})

// 点击排序
const sortBy = (v) => {
	if (sort.value == v) return
	sort.value = v
	getList()
}

// 文章列表
const list = ref([])
// 分页参数
const pagination = ref({
	currentPage: 1,
	pageSize: 10,
	total: 0
})

const loading = ref(true)
const getList = () => {
	loading.value = true
	call('getPosts', {
		...pagination.value,
		category: category.value,
		label: label.value,
		inputValue: searchTxt.value || '',
		sortValue: sort.value,
		typeValue: 1,
		fidld: { user_id: false, content: false, html: false }, // 过滤参数
		status: 1 // 只获取发布状态
	})
	.then(res => {
		loading.value = false
		list.value = res.data.list
		if (pagination.value.currentPage === 1) {
			pagination.value.total = res.data.total
		}
	})
	.catch(() => {
		loading.value = false
	})
}

// 加解密
const showLock = ref(false)
const password = ref('')
const currentItem = ref({})
const lock = item => {
	currentItem.value = item
	showLock.value = true
}
const unlock = () => {
	if (password.value === decode(currentItem.value.password)) {
		showLock.value = false
		router.navigateTo(`front/detail?id=${currentItem.value._id}`)
	} else {
		toast.error('密码不正确～')
	}
	password.value = ''
}
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
}
.filter-box {
	position: absolute;
	top: 0;
	right: 20px;
	.icon {
		padding: 5px 8px;
		background: #f2f2f2;
		margin-right: 10px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		transition: all .3s;
		cursor: pointer;
		.xicon {
			margin-top: 5px;
		}
		&.active,
		&:hover {
			background: $uni-color-primary;
			box-shadow: 0 0 10px #ddd;
			padding: 12px 8px;
			.xicon {
				color: #fff!important;
			}
		}
	}
}
</style>
