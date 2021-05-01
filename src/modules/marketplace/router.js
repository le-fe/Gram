import router from '@/router'
import MarketplaceView from './views/MarketplaceView.vue'

router.addRoute({
  path: '/market-place',
  name: 'MarketplaceView',
  component: MarketplaceView,
  meta: {
    layout: 'app'
  }
})
