<script setup lang="ts">
import type Player from '@/types/Player'
import { onMounted, reactive, computed } from 'vue'
import { NButton, NCard } from 'naive-ui'
import PlayerCardInfo from '../components/PlayerCardInfo.vue'
import router from '@/router'
import type Sphere from '@/types/Sphere'
import type Tradition from '@/types/Tradition'
import type Class from '@/types/Class'

let state = reactive<{
  players: Player[]
  classes: Class[]
  traditions: Tradition[]
  spheres: Sphere[]

}>({
  players: [],
  classes: [],
  traditions: [],
  spheres: [],
})

const getPlayers = async () => {
  const res = await fetch('http://localhost:3000/v1/player')
  const data = await res.json()
  return data
}

onMounted(async () => {
  const fetched = await getPlayers()
  state.players.push(...fetched)
})

</script>

<template>
  <main>
    <n-card v-for="player in state.players" @click="router.push({ name: 'player', params: { id: player.id } })">
      <player-card-info :player="player"></player-card-info>
    </n-card>
    <n-button type="primary" @click="router.push({ name: 'new-player' })">New Player</n-button>

    <n-card v-for="clazz in state.classes" @click="router.push({ name: 'class', params: { id: clazz.id } })">
      <p>{{clazz.name}}</p>
    </n-card>
    <n-button type="primary" @click="router.push({ name: 'new-class' })">New Class</n-button>

    <n-card v-for="tradition in state.traditions" @click="router.push({ name: 'tradition', params: { id: tradition.id } })">
      <p>{{tradition.name}}</p>
    </n-card>
    <n-button type="primary" @click="router.push({ name: 'new-tradition' })">New tradition</n-button>

    <n-card v-for="sphere in state.spheres" @click="router.push({ name: 'sphere', params: { id: sphere.id } })">
      <p>{{sphere.name}}</p>
    </n-card>
    <n-button type="primary" @click="router.push({ name: 'new-sphere' })">New sphere</n-button>
  </main>
</template>
