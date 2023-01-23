<template>
  <header>
    <nav>
      <Navbar />
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useTogglesStore } from "@/stores/toggles";
import { onBeforeMount } from "vue";

onBeforeMount(async () => {
  var toggleStore = useTogglesStore();
  await toggleStore.getBackendToggles();
});
</script>
