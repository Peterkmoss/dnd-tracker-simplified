<script lang="ts" setup>
import router from '@/router';
import type Player from '@/types/Player'
import { onMounted, reactive } from 'vue'

const props = defineProps<{
    id: string
}>()

let player: Player

const getPlayer = async () => {
  const res = await fetch(`http://localhost:3000/v1/player/${props.id}`)
  const data = await res.json()
  if (!data) {
    await router.replace({ name: 'home' })
    return {}
  }
  return data
}

onMounted(async () => {
    player = reactive(await getPlayer())
})
</script>

<template>
    Hello {{player?.id}}!
</template>