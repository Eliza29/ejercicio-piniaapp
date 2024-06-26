import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCounterSetupStore = defineStore('counterSetup', ()=>{
    const count = ref<number>(0);
    const lastChange = ref<Date>();

    const incrementBy =(val:number)=>{
        count.value      += val;
        lastChange.value = new Date();
    }

    return {
        //state properties
        count,
        lastChange,

        // Getters
        squareCount: computed(()=> count.value * count.value),

        // Actions
        incrementBy,
        increment:() => incrementBy(1)

    }
})