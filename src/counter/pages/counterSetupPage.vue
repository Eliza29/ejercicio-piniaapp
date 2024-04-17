<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '@/stores/counter-setup';
import CounterSetupValue from '../components/CounterSetupValue.vue';


const counterStore = useCounterSetupStore()
const { count, squareCount } = storeToRefs( counterStore );
const { increment, incrementBy} = counterStore;

</script>
<template>
    <div>
        <h1>Counter Setup Page: {{ counterStore.count }}</h1>
        <h4>Counter: {{ count }}</h4>
        <p>Square:   {{ squareCount }}</p>
        <br>
        <button @click="increment()">+1</button>
        <button @click="incrementBy(2)">+2</button>
        <button @click="incrementBy(5)">+5</button>
        

        <br>
        <CounterSetupValue />

    </div>
</template>

<style scoped>
    button{
        margin-right: 11px;
    }
</style>