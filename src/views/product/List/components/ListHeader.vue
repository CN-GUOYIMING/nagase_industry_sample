<script setup lang="ts">
defineProps<{ title: string }>()
const handleCilck = (): void => console.log('regist product')
</script>

<template>
  <div class="header">
    <span>{{ title }} </span>

    <a-button type="primary" class="button" @click="handleCilck">
      商品を登録する
    </a-button>
  </div>
</template>

<style scoped>
.header {
  border-bottom: solid 1px #454545;
  display: flex;
  justify-content: space-between;
  padding: 0 0 1rem 0;
}

.header span {
  color: #454545;
  font-size: 1.3rem;
  font-weight: 500;
}

.button {
  align-self: flex-end;
  background: #1b7b7b;
  border-radius: 0.333rem;
  margin: 0 0 -0.5rem 0;
}

.button:focus {
  background: #1b7b7b;
}

.button:hover {
  background: #1b7b7b;
  opacity: 0.8;
}
</style>
