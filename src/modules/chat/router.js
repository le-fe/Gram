import router from '@/router'
import ChatView from './views/ChatView.vue'

router.addRoute({
  path: '/chat',
  name: 'ChatView',
  component: ChatView,
  meta: {
    layout: 'app'
  }
})
