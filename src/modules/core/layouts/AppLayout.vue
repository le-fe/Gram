<template>
	<div class="min-h-screen">
		<AppLayoutAside class="app-aside fixed left-0 top-0 bottom-0" />
		<div class="main-content min-h-screen">
			<AppLayoutHeader class="app-header fixed" />
			<router-view />
		</div>
	</div>
</template>
<script>
import AppLayoutAside from '../components/AppLayoutAside.vue'
import AppLayoutHeader from '../components/AppLayoutHeader.vue'
export default {
	name: 'app-layout',
	components: {
		AppLayoutHeader,
		AppLayoutAside
	}
}
</script>
<style lang="scss">
$app-aside-width: 300px;
$app-header-height: 66px;
.app-aside {
  width: $app-aside-width;
}
.app-header {
  left: $app-aside-width;
  height: $app-header-height;
}
.main-content {
	margin-left: $app-aside-width;
	margin-top: $app-header-height;
}
</style>
