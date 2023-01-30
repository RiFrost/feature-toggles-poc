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

  store.toggles = { TOGGLE_2: { enabled: false, name: "TOGGLE_2" } };

  it("doesn't render button when toggle 2 is off", () => {
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

  store.toggles = { TOGGLE_2: { enabled: true, name: "TOGGLE_2" } };

  it("renders button when toggle 2 is on", async () => {
    expect(wrapper.find(".toggle2-button").isVisible()).toBeTruthy();
  });
});
