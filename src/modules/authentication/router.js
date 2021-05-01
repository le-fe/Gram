import router from '@/router'
import LoginView from './views/LoginView.vue'
import SignupView from './views/SignupView.vue'

router.addRoute({
  path: '/login',
  name: 'LoginView',
  component: LoginView,
  meta: {
    layout: 'blank'
  }
})

router.addRoute({
	path: '/sign-up',
	name: 'SignupView',
	component: SignupView,
	meta: {
	  layout: 'blank'
	}
  })
