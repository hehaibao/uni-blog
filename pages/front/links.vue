<template>
	<div class="main">
		<span class="navigation-name">友情链接</span>
		<div class="main-max-width post-list" v-loading="loading">
			<template v-if="list.length > 0">
				<el-row :gutter="12">
				    <el-col
				      v-for="(item, index) in list"
				      :key="item._id"
				      :span="8"
				    >
				      <el-card :body-style="{ padding: '0px' }">
				        <div style="padding: 14px">
				          <el-link class="link" :href="`${item.link}`" target="_blank">{{ item.name }}</el-link>
				          <div class="link-name">{{ item.link }}</div>
				        </div>
				      </el-card>
				    </el-col>
				</el-row>
			</template>
			<el-empty v-else-if="!loading" description="这里暂时没有数据～"></el-empty>
			<el-divider border-style="dashed" />
			<el-divider border-style="dashed" />
			<div class="desc">
				<el-divider content-position="left">申请友链须知：</el-divider>
				<ul>
					<li>在您申请本站友链之前，请先加好本站链接，否则不会通过，谢谢！</li>
					<li>您的网站必须已被搜索引擎收录，并且是已备案过的一级域名。</li>
					<li>不接受购物站、采集站、广告过多的网站、内容较少的网站。</li>
					<li>如果您申请的链接24小时以内没有通过，即表示暂不添加您的链接。</li>
				</ul>
				<el-divider content-position="left">友链格式如下：</el-divider>
				<div class="desc-box">
					<div class="c-row"><span class="bold">名称：</span>{{ siteName }}</div>
					<div class="c-row"><span class="bold">链接：</span>{{ siteDomain }}</div>
					<!-- <div class="c-row"><span class="bold">简介：</span>{{ siteDesc }}</div> -->
				</div>
			</div>
			<!-- 申请友链 -->
			<div class="apply-form">
				<el-divider content-position="left">在线申请友链：</el-divider>
				<el-form :inline="true" :model="ruleForm" class="demo-form-inline">
				    <el-form-item label="名称">
				      <el-input v-model="ruleForm.name" placeholder="请填写名称" />
				    </el-form-item>
				    <el-form-item label="链接">
				      <el-input v-model="ruleForm.link" placeholder="请填写链接" />
				    </el-form-item>
				    <el-form-item>
				      <el-button type="primary" :loading="saveLoading" @click="onSubmit">提交申请</el-button>
				    </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { siteName, siteDesc, siteDomain } from '@/utils/site.js'

onLoad(options => {
	// 激活右边菜单
	uni.$emit('setRightStyle', {
		type: 'putRightMenuActiveKey',
		data: '友情链接'
	})
	getList()
})

// 链接列表
const list = ref([])

const loading = ref(true)
const saveLoading = ref(false)
const getList = () => {
	loading.value = true
	call('getLinks', { isApproved: true })
		.then(res => {
			loading.value = false
			list.value = res.data
		})
		.catch(() => {
			loading.value = false
		})
}

const ruleForm = reactive({
  name: '',
  link: ''
})
const onSubmit = () => {
	// 提交申请友情链接
	if (!ruleForm.name) return toast.warning('请填写名称')
	if (!ruleForm.link) return toast.warning('请填写链接')
	if (!/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(ruleForm.link)) return toast.warning('请输入正确的链接')
	saveLoading.value = true
	call('addLinks', { name: ruleForm.name, link: ruleForm.link })
		.then(res => {
			saveLoading.value = false
			toast.success('已提交，等待审核通过后即可展示...')
			ruleForm.name = ''
			ruleForm.link = ''
		})
		.catch(() => {
			saveLoading.value = false
		})
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
.link {
	color: $uni-color-primary;
}
.link-name {
	color: #999;
	font-size: 12px;
}
.desc-box {
	background-color: #f5f5f5;
	border-left: 4px solid #F67E42;
	padding: 20px;
	font-size: 16px;
	color: #666;
	user-select: text;
	.c-row {
		margin-bottom: 10px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.bold {
		font-weight: 700;
	}
	a {
		color: #666;
		text-decoration: underline;
	}
}
.apply-form {
	margin-top: 20px;
	.el-input {
		width: 220px;
	}
}
</style>
