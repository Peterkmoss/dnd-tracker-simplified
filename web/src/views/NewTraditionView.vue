<script lang="ts" setup>
import type Tradition from '@/types/Tradition'
import { reactive } from 'vue'
import { NInput, NInputNumber, NSelect, NButton } from 'naive-ui'
import type { SelectMixedOption } from 'naive-ui/es/select/src/interface'

const dice: SelectMixedOption[] = [
    { value: 'Strength', label: 'Strength' },
    { value: 'Dexterity', label: 'Dexterity' },
    { value: 'Constitution', label: 'Constitution' },
    { value: 'Intelligence', label: 'Intelligence' },
    { value: 'Wisdom', label: 'Wisdom' },
    { value: 'Charisma', label: 'Charisma' },
]

const state = reactive<{
    tradition: Partial<Tradition>
}>({
    tradition: {}
})


type recordStore<T extends string | number, R> = {title: T, description: R}
let drawbacks: recordStore<string, string>[] = reactive([])
let boons: recordStore<string, string>[] = reactive([])

const addDrawback = () => drawbacks.push({ title: 'New Drawback', description: '' })
const removeDrawback = (idx: number) => drawbacks = drawbacks.filter((_,i) => i !== idx)

const addBoon = () => boons.push({ title: 'New Boon', description: '' })
const removeBoon = (idx: number) => boons = boons.filter((_,i) => i !== idx)

const arrToRecord = <T extends string>(acc: Record<T, T>, { title, description }: recordStore<T, T>) => {
    acc[title] = description
    return acc
}

const save = async () => {
    state.tradition.boons = boons.reduce(arrToRecord, {})
    state.tradition.drawbacks = drawbacks.reduce(arrToRecord, {})
    const result = await fetch('http://localhost:3000/v1/tradition', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(state.tradition)
    })
    const data = await result.json()
    console.log(data)
    return data
}

</script>

<template>
    <n-input v-model:value="state.tradition.name" />
    <n-select :options="dice" v-model:value="state.tradition.keyAbility" />
    <div class="table">
        <div class="column">
            <h3>Drawbacks</h3>
            <div class="list">
                <div v-for="drawback, idx of drawbacks">
                    <n-input v-model:value="drawback.title" />
                    <n-input v-model:value="drawback.description" />
                    <n-button @click="() => removeDrawback(idx)">Remove</n-button>
                </div>
                <n-button @click="addDrawback">Add Drawback</n-button>
            </div>
        </div>
        <div class="column">
            <h3>Boons</h3>
            <div class="list">
                <div v-for="boon, idx of boons">
                    <n-input v-model:value="boon.title" />
                    <n-input v-model:value="boon.description" />
                    <n-button @click="() => removeBoon(idx)">Remove</n-button>
                </div>
                <n-button @click="addBoon">Add Boon</n-button>
            </div>
        </div>
    </div>
    <n-button @click="save">Save</n-button>
</template>

<style scoped lang="scss">
div {
    display: flex;
}

.table {
    display: flex;
    
    .column, .list {
        flex-direction: column;
    }
}
</style>
