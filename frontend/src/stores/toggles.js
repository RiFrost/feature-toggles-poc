import { defineStore } from "pinia";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_API;

export const useTogglesStore = defineStore("toggles", {
  state: () => ({
    toggles: null,
  }),
  getters: {
    getToggles: (state) => state.toggles,
  },
  actions: {
    async getBackendToggles() {
      console.log(`BACKEND URL: ${backendUrl}/getFeatureToggles`);
      await axios
        .get(`${backendUrl}/getFeatureToggles`)
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
