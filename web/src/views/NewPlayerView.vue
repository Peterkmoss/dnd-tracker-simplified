<script lang="ts" setup>
import type Player from '@/types/Player'
import { onMounted, reactive } from 'vue'
import { NInput, NInputNumber, NSelect, NButton } from 'naive-ui'
import type Class from '@/types/Class';
import API from '@/util/API';
import type Tradition from '@/types/Tradition';
import router from '@/router';
import type Stat from '@/types/Stat';

const state = reactive<{
    player: Partial<Player>
    classes: Class[]
    traditions: Tradition[]
}>({ 
    player: {},
    classes: [],
    traditions: [],
})

async function fetchClasses() {
  return await API.get('class')
}

async function fetchTraditions() {
  return await API.get('tradition')
}

const toOption = ({ id, name }: any) => {
    return ({
        value: id,
        label: name,
    })
}

const stats: { [key in Stat]: { score?: number, modifier?: number } } = {
    Strength: { score: 10 },
    Dexterity: { score: 10 },
    Constitution: { score: 10 },
    Wisdom: { score: 10 },
    Intelligence: { score: 10 },
    Charisma: { score: 10 },
}

const save = async () => {
    console.log(state)
    console.log(stats)
    state.player.stats = stats as Record<Stat, { score: number, modifier: number }>
    //await API.post('player', state.player)
    //await router.replace({ name: 'home' })
}

onMounted(async () => {
    state.classes = (await fetchClasses()).map(toOption)
    state.traditions = (await fetchTraditions()).map(toOption)
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
    <div>
        <p>Tradition</p>
        <n-select :options="state.traditions"/>
    </div>
    <div class="stats">
        <p>Strength<n-input-number min="0" max="20" v-model:value="stats.Strength.score"/></p>
        <p>Dexterity<n-input-number min="0" max="20" v-model:value="stats.Dexterity.score"/></p>
        <p>Constitution<n-input-number min="0" max="20" v-model:value="stats.Constitution.score"/></p>
        <p>Wisdom<n-input-number min="0" max="20" v-model:value="stats.Wisdom.score"/></p>
        <p>Intelligence<n-input-number min="0" max="20" v-model:value="stats.Intelligence.score"/></p>
        <p>Charisma<n-input-number min="0" max="20" v-model:value="stats.Charisma.score"/></p>
    </div>
    <n-button @click="save">Save</n-button>
</template>

<style scoped lang="scss">
* {
    padding: 10px;
}

div {
    display: flex;
}

.stats {
    display: flex;
    flex-direction: row;
    
    p {
        display: flex;
        flex-direction: column;
    }
}
</style>