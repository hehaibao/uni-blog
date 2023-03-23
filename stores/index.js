import { defineStore } from 'pinia'

const userInfo = { username: '' } // 定义用户信息

export const useStore = defineStore('store', {
	state: () => {
		return {
			userInfo: uni.getStorageSync('userInfo') || { username: '' },
			categorys: uni.getStorageSync('categorys') || [],
			labels: uni.getStorageSync('labels') || [],
			links: uni.getStorageSync('links') || []
		}
	},
	actions: {
		// 修改密码 清除本地缓存
		resetPwd(value) {
			return new Promise((resolve) => {
				call('resetPwd', { password: value }).then(() => {
					toast.success('密码修改成功，需要重新登陆')
					this.userInfo = { ...userInfo }
					uni.removeStorageSync('uni_id_token')
					uni.removeStorageSync('uni_id_token_expired')
					router.reLaunch('admin/login')
					resolve()
				}).catch(() => {
					resolve()
				})
			})
		},
		logout() {
			// 注销登陆 清除本地缓存
			call('logout').then(() => {
				toast.success('登出成功')
				this.userInfo = { username: '' }
				uni.removeStorageSync('userInfo')
				uni.removeStorageSync('uni_id_token')
				uni.removeStorageSync('uni_id_token_expired')
				router.reLaunch('admin/login')
			})
		},
		getCategorys() {
			this.categorys = []
			call('getCategorys').then(res => {
				this.categorys = res.data
				uni.setStorageSync('categorys', this.categorys)
			})
		},
		getLabels() {
			this.labels = []
			call('getLabels').then(res => {
				this.labels = res.data
				uni.setStorageSync('labels', this.labels)
			})
		},
		getLinks() {
			this.links = []
			call('getLinks').then(res => {
				this.links = res.data
				uni.setStorageSync('links', this.links)
			})
		}
	},
})
