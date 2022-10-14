<script setup lang="ts">
const props = defineProps({
  max: Number,
  current: Number,
})
</script>

<template>
  <h2>Hit Points</h2>
  <p>{{ props.current }} / {{ props.max }}</p>
</template>