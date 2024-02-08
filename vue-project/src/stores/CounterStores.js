import { defineStore } from "pinia";

export let useStoreCounter = defineStore('counter',{
    state() {
        return; {
            count : 0
        };
    },

    actions : {
        increment(){
            this.count++;
        }
    }
});