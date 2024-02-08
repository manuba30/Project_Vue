<script setup>
import { ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';

let message = ref("hello, world!");

let doSomething =  () => {
    alert("doing it");
    }
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <button @click = doSomething>Click me!</button>
  </main>
</template>
