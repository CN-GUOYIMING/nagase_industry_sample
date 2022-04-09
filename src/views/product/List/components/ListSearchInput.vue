<script setup lang="ts">
defineProps<{ label: string; value: string }>()
const emit = defineEmits<{ (event: 'update:value', value: string): void }>()

const handleInput = (event: InputEvent): void => {
  const target = event.target as HTMLInputElement
  emit('update:value', target.value)
}
</script>

<template>
  <div class="wrapper">
    <span>{{ label }}</span>

    <a-input
      class="input"
      v-model:value="value"
      placeholder=" "
      @change="handleInput"
    />
  </div>
</template>

<style scoped>
.wrapper {
  width: 14rem;
}

.wrapper > span {
  color: #767676;
  font-size: 0.9rem;
}

.wrapper > input {
  border-radius: 0.3rem;
  margin: 1rem 0;
}
.wrapper > input:placeholder-shown {
  background: #fffbe8;
}
</style>
