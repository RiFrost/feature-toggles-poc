<template>
  <div class="flex justify-center">
    <div class="mx-8 py-8" v-for="toggle in toggles" :key="toggle">
      <Switch
        v-model="toggle.enabled"
        :class="[
          toggle.enabled ? 'bg-emerald-700' : 'bg-gray-700',
          toggle.name,
        ]"
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

  <div class="flex justify-center">
    <button
      @click="getSampleMessage()"
      class="mt-10 ml-3 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Get Message
    </button>
    <button
      v-show="toggles.TOGGLE_2?.enabled"
      class="toggle2-button mt-10 ml-3 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Only shows when Toggle 2 is on
    </button>
  </div>
  <main>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
        <div class="text-center">
          <h1
            class="text-2xl font-bold tracking-tight text-blue-900 sm:text-4xl"
          >
            {{ response }}
          </h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { Switch } from "@headlessui/vue";
import { useTogglesStore } from "@/stores/toggles";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_API;

var toggleStore = useTogglesStore();
var response = ref("");

var toggles = computed(() => toggleStore.getToggles);
var isToggled = computed(() => toggleStore.is);

function print() {
  console.log(toggles.value);
}
async function getSampleMessage() {
  return await axios
    .get(`${backendUrl}/getSampleMessage`)
    .then((res) => {
      response.value = res.data;
    })
    .catch((error) => console.log(error));
}
</script>
