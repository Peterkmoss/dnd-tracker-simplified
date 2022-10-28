<script setup lang="ts">import router from '@/router';
import type Sphere from '@/types/Sphere';
import { onMounted, reactive } from 'vue';
import API from '@/util/API'

const props = defineProps<{
  id: string
}>()

const state = reactive<{
  sphere: Partial<Sphere>
}>({
  sphere: {}
})

const getSphere = async () => {
  const data = await API.get(`sphere/${props.id}`)
  if (!data) {
    await router.replace({ name: 'home' })
    return {}
  }
  return data
}

onMounted(async () => {
    state.sphere = await getSphere()
})
</script>

<template>
  {{state.sphere}}
</template>
