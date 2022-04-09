import type { ActionHandler, Mutation } from 'vuex'
import type {
  QueryPrimaryProductModel,
  QueryPrimaryProductParameters,
} from '@/api/product/model/primary-product-model'

import { queryPrimaryProduct } from '@/api/product/primary-product'
import { GET_PRIMARY_PRODUCTS } from '../action-types/primary-product-actions'

export interface PrimaryProductStoreState {
  list: QueryPrimaryProductModel
}

const state: PrimaryProductStoreState = { list: [] }

const getters = {}

const actions: {
  [actionType: string]: ActionHandler<PrimaryProductStoreState, any>
} = {
  [GET_PRIMARY_PRODUCTS]: async (
    { commit },
    payload: QueryPrimaryProductParameters
  ): Promise<void> => {
    commit(GET_PRIMARY_PRODUCTS, await queryPrimaryProduct(payload))
  },
}

const mutations: {
  [mutationType: string]: Mutation<PrimaryProductStoreState>
} = {
  [GET_PRIMARY_PRODUCTS]: (
    state: PrimaryProductStoreState,
    products: QueryPrimaryProductModel
  ): void => {
    state.list = products
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
