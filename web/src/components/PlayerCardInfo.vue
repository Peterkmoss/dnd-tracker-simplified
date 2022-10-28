<script setup lang="ts">
import type Player from '@/types/Player'

defineProps<{
    player: Player
}>()
</script>

<template>
    <h2>{{player.name}}</h2>
</template>