<script setup lang="ts">
import type Player from '@/types/Player'
import { onMounted, reactive, computed } from 'vue'
import { NButton, NCard } from 'naive-ui'
import PlayerCardInfo from '../components/PlayerCardInfo.vue'
import router from '@/router'
import type Sphere from '@/types/Sphere'
import type Tradition from '@/types/Tradition'
import type Class from '@/types/Class'
import API from '@/util/API'

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
  return await API.get('player')
}

const getClasses = async () => {
  return await API.get('class')
}

const getTraditions = async () => {
  return await API.get('tradition')
}

const getSpheres = async () => {
  return await API.get('sphere')
}

onMounted(async () => {
  const players = await getPlayers()
  state.players.push(...players)

  const classes = await getClasses()
  state.classes.push(...classes)

  const traditions = await getTraditions()
  state.traditions.push(...traditions)

  const spheres = await getSpheres()
  state.spheres.push(...spheres)
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
    <n-button type="primary" @click="router.push({ name: 'new-tradition' })">New Tradition</n-button>

    <n-card v-for="sphere in state.spheres" @click="router.push({ name: 'sphere', params: { id: sphere.id } })">
      <p>{{sphere.name}}</p>
    </n-card>
    <n-button type="primary" @click="router.push({ name: 'new-sphere' })">New Sphere</n-button>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 25px;
  display: flex;
  flex-direction: column;  
  max-height: 100vh;
  max-width: 100vw;
}
</style>
