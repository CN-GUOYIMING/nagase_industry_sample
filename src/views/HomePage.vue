<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const handleClick = () => router.push('/product')
</script>

<template>
  <div class="button-group">
    <a-button class="button" type="primary" ghost @click="handleClick">
      商品一覧
    </a-button>
  </div>
</template>

<style scoped>
.button-group {
  padding: 2rem 2rem;
}

.button,
.button:focus,
.button:hover {
  border: 1px solid #1b7b7b;
  color: #1b7b7b;
}
</style>
