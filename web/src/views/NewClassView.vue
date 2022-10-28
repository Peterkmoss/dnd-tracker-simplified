<script lang="ts" setup>
import type Class from '@/types/Class'
import { reactive } from 'vue'
import { NInput, NInputNumber, NSelect, NButton } from 'naive-ui'
import type { SelectMixedOption } from 'naive-ui/es/select/src/interface'

const dice: SelectMixedOption[] = [
    { value: 4, label: '4' },
    { value: 6, label: '6' },
    { value: 8, label: '8' },
    { value: 10, label: '10' },
    { value: 12, label: '12' },
    { value: 20, label: '20' },
    { value: 100, label: '100' },
]

const state = reactive<{
    class: Partial<Class> & { 
        magicTalents: Record<number, number> 
        spellPoints: Record<number, number> 
    }
}>({
    class: {
        magicTalents: {},
        spellPoints: {},
    }
})

const updateClassHitDie = (value: number) => {
    state.class.hitDie = {
        sides: value
    }
    console.log(state.class)
}

const save = async () => {
    const result = await fetch('http://localhost:3000/v1/class', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(state.class)
    })
    const data = await result.json()
    console.log(data)
    return data
}

</script>

<template>
    <n-input v-model:value="state.class.name" />
    <n-select :options="dice" @update:value="updateClassHitDie" />
    <div class="table">
        <div class="column">
            <h3>Magic Talents</h3>
            <div class="list">
                <div v-for="i in 20">
                    <p>Level {{i}}</p>
                    <n-input-number min="0" v-model:value="state.class.magicTalents[i]" />
                </div>
            </div>
        </div>
        <div class="column">
            <h3>Spell Points</h3>
            <div class="list">
                <div v-for="i in 20">
                    <p>Level {{i}}</p>
                    <n-input-number min="0" v-model:value="state.class.spellPoints[i]" />
                </div>
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