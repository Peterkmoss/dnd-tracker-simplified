<script lang="ts" setup>
import router from '@/router';
import type Player from '@/types/Player'
import { onMounted, reactive } from 'vue'
import API from '@/util/API'

const props = defineProps<{
    id: string
}>()

const state = reactive<{
  player: Partial<Player>
}>({
  player: {}
})

const getPlayer = async () => {
  const data = await API.get(`player/${props.id}`)
  if (!data) {
    await router.replace({ name: 'home' })
    return {}
  }
  return data
}

onMounted(async () => {
  state.player = await getPlayer()
})
</script>

<template>
  {{state.player}}
</template>