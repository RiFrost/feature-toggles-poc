<template>
  <div class="flex justify-center">
    <div class="mx-8 py-8" v-for="toggle in toggles" :key="toggle">
      <Switch
        v-model="toggle.enabled"
        :class="toggle.enabled ? 'bg-emerald-700' : 'bg-gray-700'"
        class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        @click="toggleStore.updateToggle(toggle)"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="toggle.enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
      <h2>{{ toggle.name }}</h2>
    </div>

    <button @click="print()">Print Toggles</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Switch } from "@headlessui/vue";
import { useTogglesStore } from "@/stores/toggles";

var toggleStore = useTogglesStore();

var toggles = computed(() => toggleStore.getToggles);

function print() {
  console.log(toggles.value);
}
</script>
