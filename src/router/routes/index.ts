import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.globEager('./modules/**/*.ts')
const routeModuleList: RouteRecordRaw[] = []

Object.keys(modules).forEach((key: string): void => {
  const module = modules[key].default ?? {}
  const moduleList = Array.isArray(module) ? [...module] : [module]
  routeModuleList.push(...moduleList)
})

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: () => import('@/views/HomePage.vue'),
}

export const basicRouter: RouteRecordRaw[] = [RootRoute, ...routeModuleList]
