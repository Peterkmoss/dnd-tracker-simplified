<script lang="ts" setup>
import type Player from '@/types/Player'
import { onMounted, reactive } from 'vue'
import { NInput, NInputNumber, NSelect } from 'naive-ui'
import type Class from '@/types/Class';

const state = reactive<{
    player: Partial<Player>
    classes: Class[]
}>({ 
    player: {},
    classes: [],
})

async function fetchClasses() {
  const res = await fetch('http://localhost:3000/v1/class')
  const data = await res.json()
  return data
}

onMounted(async () => {
    state.classes = await fetchClasses()
})
</script>

<template>
    <div>
        <p>Navn</p>
        <n-input v-model:value="state.player.name"/>
    </div>
    <div>
        <p>Class</p>
        <n-select :options="state.classes"/>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
}
</style>