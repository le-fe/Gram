import router from '@/router'
import ExploreView from './views/ExploreView.vue'

router.addRoute({
  path: '/explore',
  name: 'ExploreView',
  component: ExploreView,
  meta: {
    layout: 'app'
  }
})
