<template>
	<div class="px-8 py-6">
		<div class="container m-auto">
			<h1 class="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5">Feed</h1>
      <div class="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">
        <div class="space-y-5 flex-shrink-0 lg:w-7/12">
          <template v-for="feed in 10" :key="feed">
            <FeedItem />
          </template>
        </div>
        <div class="lg:w-5/12">
          <WhoToFollow />
          <LatestBlock />
        </div>
      </div>
		</div>
	</div>
</template>
<script>
import FeedItem from './components/FeedItem.vue'
import WhoToFollow from './components/WhoToFollowBlock.vue'
import LatestBlock from './components/LatestBlock.vue'
export default {
	components: {
    WhoToFollow,
    LatestBlock,
		FeedItem
	}
}
</script>
