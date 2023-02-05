import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import FeatureToggleView from "@/views/FeatureToggleView.vue";
import { useTogglesStore } from "@/stores/toggles";

describe("FeatureToggleView with toggle off", () => {
  const wrapper = mount(FeatureToggleView, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn(), stubActions: true })],
    },
  });

  const store = useTogglesStore();

  store.toggles = {
    SHOW_UI_BUTTON: { enabled: false, name: "SHOW_UI_BUTTON" },
  };

  it("doesn't render button when SHOW_UI_BUTTON is toggled off", () => {
    expect(wrapper.find(".toggle2-button").isVisible()).toBeFalsy();
  });
});

describe("FeatureToggleView with toggle on", () => {
  const wrapper = mount(FeatureToggleView, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn(), stubActions: true })],
    },
  });

  const store = useTogglesStore();

  store.toggles = { SHOW_UI_BUTTON: { enabled: true, name: "SHOW_UI_BUTTON" } };

  it("renders button when SHOW_UI_BUTTON is toggled on", async () => {
    expect(wrapper.find(".toggle2-button").isVisible()).toBeTruthy();
  });
});
