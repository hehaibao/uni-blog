<template>
	<div class="main">
		<span class="navigation-name">我的项目</span>
		<div class="main-max-width post-list" v-loading="loading">
			<div class="source-list" v-if="list.length">
				<el-row :gutter="12">
				    <el-col
				      v-for="(item, index) in list"
				      :key="item._id"
				      :span="8"
				    >
				      <el-card :body-style="{ padding: '0px' }" @click="clickItem(item)">
				        <el-image :src="item.thumbnail" fit="contain" />
				        <div style="padding: 14px">
				          <div>{{item.title}}</div>
						  <p class="desc line-3">{{item.abstract}}</p>
				        </div>
				      </el-card>
				    </el-col>
				</el-row>
				<bg-pagination v-model:pagination="pagination" @pageChange="getList" />
			</div>
			<el-empty v-else description="空空如也～"></el-empty>
		</div>
	</div>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'

onLoad(options => {
	// 激活右边菜单
	uni.$emit('setRightStyle', {
		type: 'putRightMenuActiveKey',
		data: '我的项目'
	})
	getList()
})

// 列表
const list = ref([])
// 分页参数
const pagination = ref({
	currentPage: 1,
	pageSize: 9,
	total: 0
})

const loading = ref(true)
const getList = () => {
	loading.value = true
	call('getPosts', {
		...pagination.value,
		typeValue: 2,
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

// 点击单个项目
const clickItem = (item) => {
	toast.warning('正在开发中...')
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
.source-list {
	.el-image {
		width: 100%;
	}
	.el-card {
		margin-bottom: 15px;
	}
	.desc {
	  font-size: 12px;
	  color: #999;
	  margin-top: 5px;
	}
}
</style>
