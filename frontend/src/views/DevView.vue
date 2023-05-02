<template>
  <div class="flex justify-center my-5">
    <h1 v-show="toggles?.SAMPLE_TOGGLE?.enabled &&
      toggles?.DEV_TOGGLE?.enabled" class="font-bold heading"
    >
        This is a View which is currently under development!
    </h1>
  </div>
</template>

<script setup>
import {useTogglesStore} from "@/stores/toggles";
import {computed} from "vue";

var toggleStore = useTogglesStore();
var toggles = computed(() => toggleStore.getToggles);

</script>

<style scoped>
</style>