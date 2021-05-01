import router from '@/router'
import AccountSettingView from './views/AccountSettingView.vue'

router.addRoute({
  path: '/account-setting',
  name: 'AccountSettingView',
  component: AccountSettingView,
  meta: {
    layout: 'app'
  }
})
