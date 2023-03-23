<template>
	<div class="main">
		<el-skeleton :rows="30" animated :loading="loading" />
		<!-- 标题 -->
		<span class="title">{{ detail.title }}</span>
		<!-- 创建时间和浏览量 -->
		<itemOther v-if="!loading" class="detail-other" :created_date="detail.created_date" :page_view="detail.page_view" />
		<div class="main-max-width detail-wrap">
			<!-- 内容 -->
			<div v-html="detail.html" class="markdown-body content"></div>
			
			<div class="other">
				<!-- 分类和标签 -->
				<div class="tag-box">
					<el-tag @click="clickTag('category', item)" v-for="item in detail.categorys">{{ item }}</el-tag>
					<el-tag @click="clickTag('label', item)" v-for="item in detail.labels" type="success">{{ item }}</el-tag>
				</div>
				<!-- 社会化分享 -->
				<div class="share-box">
					<Share :title="detail.title"></Share>
				</div>
			</div>
			<!-- 打赏 -->
			<div class="btns">
				<el-button type="success" ref="buttonRef" v-click-outside="onClickOutside"> 打赏支持 <Icon color="#fff" style="margin-left: 3px;"><Coffee /></Icon></el-button>
			
				<el-popover
				    ref="popoverRef"
				    :virtual-ref="buttonRef"
				    trigger="click"
					placement="top"
					:width="280"
				    virtual-triggering
				  >
				    <el-image fit="contain" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b3a9d053-eefd-45be-8142-88ff822c08ea/747c11ac-04ee-4c2f-977f-3a999a735c24.png"></el-image>
					<div class="tip">请作者喝杯咖啡☕️</div>
				</el-popover>
				
				<el-button type="warning" @click="aboutMe"> 关于我 <Icon color="#fff" style="margin-left: 3px;"><Male /></Icon></el-button>
			</div>
			<!-- 版权声明 -->
			<div class="copyright-box">
				<div class="c-row"><span class="bold">本文标题：</span>{{ detail.title }}</div>
				<div class="c-row"><span class="bold">本文地址：</span>{{ getLink() }}</div>
				<div class="c-row"><span class="bold">版权声明：</span>本站所有文章除特别声明外，均采用<a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.zh" target="_blank">CC BY-NC-SA 3.0</a>许可协议。转载请注明出处，谢谢！</div>
			</div>
			<!-- 相关推荐 -->
			<div class="related-articles" v-if="relatedList.length">
				<h3>相关推荐</h3>
				<ul>
					<li v-for="item in relatedList" :key="item._id">
						<el-link :href="`/#/pages/front/detail?id=${item._id}`" target="_blank">{{item.title}}</el-link>
						<span class="page-view">(<Icon color="#666666"><Eye /></Icon> {{item.page_view}})</span>
					</li>
				</ul>
			</div>
		
			<!-- 返回顶部 -->
			<el-tooltip
			  effect="dark"
			  content="返回顶部"
			  placement="left"
			>
				<el-backtop :visibility-height="400" :right="20" :bottom="80" />
			</el-tooltip>
		</div>
	</div>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { Icon } from '@vicons/utils'
import { Coffee, Eye, Male } from '@vicons/fa'
import { ClickOutside as vClickOutside } from 'element-plus'
import itemOther from './components/itemOther.vue'
import { Share } from 'vue3-social-share';
import 'vue3-social-share/lib/index.css'

onLoad(options => {
	getDetail(options.id)
})

const buttonRef = ref()
const popoverRef = ref()
const detail = ref({})
const loading = ref(false)
const relatedList = ref([])

const getDetail = id => {
	loading.value = true
	call('getPostDetail', {
		id: id,
		addPageView: true,
		fidld: { password: false, content: false } // 过滤参数
	}).then(res => {
		loading.value = false
		detail.value = res.data
		getRelatedList()
	})
}

const getRelatedList = () => {
	call('getRelatedPosts', {
		label: detail.value.labels.length ? detail.value.labels[0] : '',
		id: detail.value._id,
		pageSize: 10,
		fidld: { user_id: false, content: false, html: false }, // 过滤参数
	})
	.then(res => {
		relatedList.value = res.data
	})
}

const clickTag = (tag, name) => {
	router.redirectTo(`front/news?${tag}=${name}`)
}

const getLink = () => {
	return location.href
}

const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}

const aboutMe = () => {
	router.open(`/#/pages/front/webview?src=/static/animationResume/index.html`)
}
</script>

<style lang="scss">
.title {
	font-size: 22px;
	line-height: 32px;
	font-weight: bold;
	user-select: text;
	width: auto;
	display: inline;
	background: linear-gradient(to bottom,transparent 60%,rgba(189,202,219,.3) 0) no-repeat;
}
.detail-other {
	margin-top: 10px;
}
.detail-wrap {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 968px;
	padding: 10px 0;
	position: relative;
	
	.content {
		margin-top: 22px;
	}
	.other {
		margin: 30px 0 20px;
		clear: both;
		.share-box {
			float: right;
		}
		.tag-box {
			line-height: 40px;
			float: left;
			.el-tag {
				margin: 5px 10px 5px 0;
				cursor: pointer;
				&:hover {
					opacity: .8;
				}
			}
		}
	}
	.btns {
		width: 100%;
		border-top: 1px dotted #ccc;
		margin: 10px auto 30px;
		padding-top: 30px;
		text-align: center;
	}
	.copyright-box {
		background-color: #F5F5F5;
		border-left: 4px solid #4F88CF;
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
	.related-articles {
		margin: 20px 0;
		h3 {
			margin-bottom: 20px;
		}
		.page-view {
			font-size: 12px;
			margin-left: 3px;
			color: #999;
		}
	}
}
.tip {
	color: #999;
	text-align: center;
	margin: 15px;
}
</style>
