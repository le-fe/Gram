import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.scss'
import './modules'
import installCore from './modules/core'

function startApp() {
	const app = createApp(App)
	app.use(store)
	app.use(router)
	installCore(app)
	app.mount('#app')
}

startApp()
