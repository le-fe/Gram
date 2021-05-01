<template>
	<div class="h-screen flex flex-col">
		<BlankLayoutHeader class="blank-layout-header" />
		<div class="blank-layout-content flex-1">
			<router-view />
		</div>
		<div class="lg:mb-5 py-3 uk-link-reset">
            <div class="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
                <div class="flex space-x-2 text-gray-700 uppercase">
                    <a href="#"> About</a>
                    <a href="#"> Help</a>
                    <a href="#"> Terms</a>
                    <a href="#"> Privacy</a>
                </div>
                <p class="capitalize"> © copyright 2020 by Instello</p>
            </div>
        </div>
	</div>
</template>
<script>
import BlankLayoutHeader from '../components/BlankLayoutHeader.vue'
export default {
	name: 'blank-layout',
	components: {
		BlankLayoutHeader
	}
}
</script>
<style lang="scss">
$app-header-height: 66px;
.blank-layout-header {
	height: $app-header-height;
}
.blank-layout-content {
	margin-top: $app-header-height;
}
</style>
