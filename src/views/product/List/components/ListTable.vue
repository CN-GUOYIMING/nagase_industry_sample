<script setup lang="ts">
import type { QueryPrimaryProductModel } from '@/api/product/model/primary-product-model'

defineProps<{ data: QueryPrimaryProductModel }>()

interface AntTableColumn {
  title: string
  dataIndex: string
}

const columns: AntTableColumn[] = [
  { title: '自社商品名', dataIndex: 'productName' },
  { title: '最終更新日', dataIndex: 'lastUpdateDate' },
  { title: '登録日', dataIndex: 'registDate' },
]
</script>

<template>
  <a-table
    class="ant-table-striped"
    size="middle"
    :columns="columns"
    :data-source="data"
    :row-class-name="(_record: any, index: number) => index % 2 === 1 && 'table-striped'"
    :pagination="{ pageSize: 20 }"
    :scroll="{ y: 400 }"
  />
</template>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}

.ant-table-striped :deep(thead) th {
  background: #fff;
  border-left: none;
}

.ant-table-striped
  :deep(.ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before) {
  content: none;
}

.ant-table-striped :deep(tbody) > tr {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
</style>
