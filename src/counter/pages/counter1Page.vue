<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionStore } from '@/stores/counter-options';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';


const counterStore = useCounterOptionStore()
const { count, squareCount } = storeToRefs( counterStore );
const { increment, incrementBy} = counterStore;

</script>
<template>
    <div>
        <h1>Counter 1 Page: {{ counterStore.count }}</h1>
        <h4>Counter: {{ count }}</h4>
        <p>Square:   {{ squareCount }}</p>
        <br>
        <button @click="increment()">+1</button>
        <button @click="incrementBy(2)">+2</button>
        <button @click="incrementBy(5)">+5</button>
        <button @click="counterStore.$reset()">Reset</button>

        <br>
        <CounterOptionsValue />

    </div>
</template>

<style scoped>
    button{
        margin-right: 11px;
    }
</style>