import { defineStore } from "pinia";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_API;

export const useTogglesStore = defineStore("toggles", {
  state: () => ({
    toggles: {},
  }),
  getters: {
    getToggles: (state) => state.toggles,
  },
  actions: {
    async getBackendToggles() {
      console.log(`BACKEND URL: ${backendUrl}/test`);
      await axios
        .get(`${backendUrl}/test`)
        .then((res) => {
          this.toggles = res.data;
        })
        .catch((error) => console.log(error));
    },
    async updateToggle(toggle) {
      await axios
        .post(`${backendUrl}/updateToggle`, toggle)
        .catch((error) => console.log(error));
    },
  },
});
