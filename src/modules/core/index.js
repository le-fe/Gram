import { AppLayout, BlankLayout } from './layouts'

export default function installCore(app) {
	app.component(AppLayout.name, AppLayout)
	app.component(BlankLayout.name, BlankLayout)
}