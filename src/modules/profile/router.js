import router from '@/router'
import ProfileView from './views/ProfileView.vue'

router.addRoute({
  path: '/profile',
  name: 'ProfileView',
  component: ProfileView,
  meta: {
    layout: 'app'
  }
})
