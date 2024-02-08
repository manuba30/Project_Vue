
<template>
    <section v-if="assignments.length">
      <h2 class="font-bold mb-2">{{title}}</h2>
  
      <ul>
        <assignment
          v-for="assignment in assignments"
          :key="assignment.id"
        ></assignment>
      </ul>
    </section>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import Assignment from "./Assignment.vue";
  
  export default defineComponent({
    components: { Assignment },
  
    props: {
      assignments: Array,
      title: String,
    },
  });
  </script>