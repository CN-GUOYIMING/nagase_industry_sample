import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import { setupRouter } from './router'
import { setupStore } from './store'

const bootstrap = (): void => {
  const app = createApp(App)

  // Configure routing
  setupRouter(app)

  // Configure store
  setupStore(app)

  app.mount('#app')
}

bootstrap()
