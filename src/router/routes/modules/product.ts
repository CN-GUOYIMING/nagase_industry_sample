import { LAYOUT } from '@/router/constant'
import { RouteRecordRaw } from 'vue-router'

const product: RouteRecordRaw = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/list',

  children: [
    {
      path: 'list',
      name: 'List',
      component: () => import('@/views/product/List/index.vue'),
    },
  ],
}

export default product
