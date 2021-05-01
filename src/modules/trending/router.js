import router from '@/router'
import TrendingView from './views/TrendingView.vue'

router.addRoute({
  path: '/trending',
  name: 'TrendingView',
  component: TrendingView,
  meta: {
    layout: 'app'
  }
})
