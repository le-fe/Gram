import router from '@/router'
import FeedView from './FeedView.vue'

router.addRoute({
  path: '/feed',
  name: 'FeedView',
  component: FeedView,
  meta: {
    layout: 'app'
  }
})
