import { defineStore } from "pinia";

interface CounterOptionsState {
    count:     number;
    lastChange?:  Date;
}

export const useCounterOptionStore = defineStore('counterOptions', {
    state: () => ({
        count: 0,
        lastChange: undefined,
    } as CounterOptionsState),
    getters:{
        squareCount: ( state ) => state.count * state.count,

    },
    actions:{
        incrementBy( value: number ){
            this.count += value;
            this.lastChange = new Date();
        },
        increment(){
            this.incrementBy(1);
        }

    }
})