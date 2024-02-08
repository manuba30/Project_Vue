<script setup>
import { useCounterStore } from '@/stores/counter';

let counter = useCounterStore()
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>

        <button @click = "counter.count++">increment</button>
    </div>
</template>