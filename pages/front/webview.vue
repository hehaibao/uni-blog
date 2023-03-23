<!-- 访问第三方页面 -->
<template>
	<div class="main">
		<web-view :src="link"></web-view>
	</div>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'

let link = ref('')

onLoad(options => {
	link.value = options.src
})

</script>

<style lang="scss">
.main {
	
}
</style>
