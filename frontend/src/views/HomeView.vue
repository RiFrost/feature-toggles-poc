<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <p></p>
  <div v-for="toggle in toggles" :key="toggle">
    <div v-if="toggle.enabled">
      <h1>{{ toggle.name }}</h1>
    </div>
  </div>
  <p></p>
</template>

<script setup>
import { ref } from "vue";
import { useTogglesStore } from "@/stores/toggles";

var toggleStore = useTogglesStore();

var toggles = ref(toggleStore.getToggles);
</script>
