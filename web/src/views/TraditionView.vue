<script setup lang="ts">import router from '@/router';
import type Tradition from '@/types/Tradition';
import { onMounted, reactive } from 'vue';
import API from '@/util/API'

const props = defineProps<{
  id: string
}>()

const state = reactive<{
  tradition: Partial<Tradition>
}>({
  tradition: {}
})

const getTradition = async () => {
  const data = await API.get(`tradition/${props.id}`)
  if (!data) {
    await router.replace({ name: 'home' })
    return {}
  }
  return data
}

onMounted(async () => {
    state.tradition = await getTradition()
})
</script>

<template>
  {{state.tradition}}
</template>