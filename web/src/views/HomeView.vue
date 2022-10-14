<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue'
import Health from '../components/Health.vue'

let player: {
  hp: number
  hpMax: number
} = reactive({
  hp: 0,
  hpMax: 0,
})

const getPlayer = async () => {
  const res = await fetch('http://localhost:3000/v1/player/test')
  const data = await res.json()
  console.log(data)
  return data
}

onMounted(async () => {
  const p = await getPlayer()
  player.hp = p.hp
  player.hpMax = p.hpMax
})

</script>

<template>
  <main>
    <Health :max="player.hpMax" :current="player.hp"></Health>
  </main>
</template>
