import { createRouter, createWebHistory } from 'vue-router'
import { basicRouter } from './routes'

import type { Router, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: basicRouter as unknown as RouteRecordRaw[],
  strict: true,
})

export const setupRouter = (app: App<Element>): void => {
  app.use(router)
}
