<script setup lang="ts">
import type { Store } from 'vuex'

import { GET_PRIMARY_PRODUCTS } from '@/store/action-types/primary-product-actions'
import { computed } from '@vue/reactivity'
import { reactive } from 'vue'
import { useStore } from 'vuex'
import ListHeader from './components/ListHeader.vue'
import ListSearchInput from './components/ListSearchInput.vue'
import ListTable from './components/ListTable.vue'
import { QueryPrimaryProductModel } from '@/api/product/model/primary-product-model'

const store: Store<any> = useStore()

// 検索条件
interface SearchConditions {
  privateCompanyProductCode: string
  privateCompanyProductName: string
}

const searchConditions = reactive<SearchConditions>({
  privateCompanyProductCode: '',
  privateCompanyProductName: '',
})

const handleReset = (): void => {
  Object.keys(searchConditions).forEach((key: string): void => {
    searchConditions[key as keyof SearchConditions] = ''
  })
}

const handleSearch = (): void => {
  store.dispatch(`primaryProduct/${GET_PRIMARY_PRODUCTS}`, {
    code: searchConditions.privateCompanyProductCode,
    name: searchConditions.privateCompanyProductName,
  })
}

// 改版送信対象
const printRevisionTarget = (): void => {
  console.log('revision target printed')
}

// 表
const data = computed<QueryPrimaryProductModel>(
  (): QueryPrimaryProductModel => store.state.primaryProduct.list
)
</script>

<template>
  <div class="container">
    <ListHeader title="自社商品フォルダ名" />

    <div class="input-wrapper">
      <ListSearchInput
        label="自社商品コード"
        v-model:value="searchConditions.privateCompanyProductCode"
      />

      <ListSearchInput
        label="自社商品名"
        v-model:value="searchConditions.privateCompanyProductName"
      />
    </div>

    <div class="button-wrapper">
      <a-button
        type="primary"
        class="button search"
        size="large"
        @click="handleSearch"
      >
        検索する
      </a-button>

      <a-button
        type="primary"
        class="button reset"
        size="large"
        @click="handleReset"
      >
        検索条件クリア
      </a-button>
    </div>

    <div class="revision-target">
      <a-button class="button" @click="printRevisionTarget">
        改版送信対象出力
      </a-button>

      <span>改版送信対象となる商品情報を出力します</span>
    </div>

    <ListTable class="table" :data="data" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
}

.input-wrapper {
  display: flex;
  gap: 1.5rem;
  margin: 2.5rem 0 0;
}

.button-wrapper {
  align-self: center;
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0 0;
}

.button-wrapper > .button {
  border-radius: 0.3rem;
  font-size: 0.8rem;
  width: 8rem;
}

.button-wrapper > .search {
  background: #1b7b7b;
}

.button-wrapper > .search:hover {
  background: #1b7b7b;
  opacity: 0.8;
}

.button-wrapper > .reset {
  background: #767676;
}

.button-wrapper > .reset:hover {
  background: #767676;
  opacity: 0.8;
}

.revision-target {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
}

.revision-target > .button {
  border-color: #1b7b7b;
  border-radius: 0.3rem;
  color: #1b7b7b;
  width: 9rem;
}

.revision-target > .button:hover {
  background: #1b7b7b;
  color: #fff;
}

.revision-target > span {
  margin: 0.8rem 0 0;
}

.table {
  margin: 2rem 0 0;
}
</style>
