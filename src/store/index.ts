import { createStore } from 'vuex'
import primaryProduct from './modules/primary-product'

import type { StoreOptions } from 'vuex'
import type { App } from 'vue'

const store = createStore<StoreOptions<any>>({
  modules: { primaryProduct },
})

export const setupStore = (app: App<Element>): void => {
  app.use(store)
}
