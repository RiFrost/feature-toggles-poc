<template>
  <div class="flex justify-center">
    <div role="status" class="mx-auto mt-8" v-if="!toggles">
      <svg
        aria-hidden="true"
        class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
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

    <!-- <button @click="print()">Print Toggles</button> -->
  </div>

  <div class="flex justify-center">
    <button
      @click="getSampleMessage()"
      class="mt-10 ml-3 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Get Message
    </button>
    <button
      v-show="toggles?.SHOW_UI_BUTTON?.enabled"
      class="toggle2-button mt-10 ml-3 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Only shows when SHOW_UI_BUTTON is on
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
