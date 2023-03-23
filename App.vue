<script>
import authToken from '@/utils/authToken.js'
import setWindowStyle from '@/utils/setWindowStyle.js'
export default {
	onLaunch() {
		// 根据屏幕宽度来实时改变左右窗口的样式
		setWindowStyle()
		
		uni.onWindowResize(res => {
			setWindowStyle(res.size.windowWidth)
		})
		window.addEventListener('hashchange',function(e) { 
			// 监听路由变化，检查是否需要校验token
			if (e.newURL !== e.oldURL) {
				authToken()
			}
		})
	},
	onPageNotFound() {
		// 不存在的路由，跳转到404
		uni.redirectTo({
			url: '/pages/error/404'
		})
	}
}
</script>

<style>
/* 公共样式 */
@import './static/css/common.css';
@import 'github-markdown-css/github-markdown-light.css';
@import 'element-plus/theme-chalk/el-message.css';
@import 'element-plus/theme-chalk/el-message-box.css';
</style>
