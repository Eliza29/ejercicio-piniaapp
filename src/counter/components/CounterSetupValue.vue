
<script setup lang="ts">
import { useCounterSetupStore } from '@/stores/counter-setup';


const counter = useCounterSetupStore()

</script>
<template>
    <div>
        <h1>El valor es: {{ counter.count }}</h1>
        <h4>El valor es: {{ counter.lastChange }}</h4>
    </div>
</template>

<style scoped>

</style>