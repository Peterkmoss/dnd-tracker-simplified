<script setup lang="ts">import router from '@/router';
import type Class from '@/types/Class';
import { onMounted, reactive } from 'vue';
import API from '@/util/API'

const props = defineProps<{
  id: string
}>()

const state = reactive<{
  class: Partial<Class>
}>({
  class: {}
})

const getClass = async () => {
  const data = await API.get(`class/${props.id}`)
  if (!data) {
    await router.replace({ name: 'home' })
    return {}
  }
  return data
}

onMounted(async () => {
    state.class = await getClass()
})
</script>

<template>
  {{state.class}}
</template>
