import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import DevView from "@/views/DevView.vue";
import { useTogglesStore } from "@/stores/toggles";

describe("DevView with both toggles off", () => {
  const wrapper = mount(DevView, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn(), stubActions: true })],
    },
  });

  const store = useTogglesStore();

  store.toggles = {
    SAMPLE_TOGGLE: { enabled: false, name: "SAMPLE_TOGGLE" },
    DEV_TOGGLE: { enabled: false, name: "DEV_TOGGLE" },
  };

  it("doesn't render heading when SAMPLE_TOGGLE & DEV_TOGGLE are toggled off", () => {
    expect(wrapper.find(".heading").isVisible()).toBeFalsy();
  });
});

describe("DevView with only SAMPLE_TOGGLE off", () => {
  const wrapper = mount(DevView, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn(), stubActions: true })],
    },
  });

  const store = useTogglesStore();

  store.toggles = {
    SAMPLE_TOGGLE: { enabled: false, name: "SAMPLE_TOGGLE" },
    DEV_TOGGLE: { enabled: true, name: "DEV_TOGGLE" },
  };

  it("doesn't render heading when SAMPLE_TOGGLE & DEV_TOGGLE are toggled off", () => {
    expect(wrapper.find(".heading").isVisible()).toBeFalsy();
  });
});

describe("DevView with only DEV_TOGGLE off", () => {
  const wrapper = mount(DevView, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn(), stubActions: true })],
    },
  });

  const store = useTogglesStore();

  store.toggles = {
    SAMPLE_TOGGLE: { enabled: true, name: "SAMPLE_TOGGLE" },
    DEV_TOGGLE: { enabled: false, name: "DEV_TOGGLE" },
  };

  it("doesn't render heading when SAMPLE_TOGGLE & DEV_TOGGLE are toggled off", () => {
    expect(wrapper.find(".heading").isVisible()).toBeFalsy();
  });
});

describe("DevView with both toggles on", () => {
  const wrapper = mount(DevView, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn(), stubActions: true })],
    },
  });

  const store = useTogglesStore();

  store.toggles = {
    SAMPLE_TOGGLE: { enabled: true, name: "SAMPLE_TOGGLE" },
    DEV_TOGGLE: { enabled: true, name: "DEV_TOGGLE" },
  };

  it("doesn't render heading when SAMPLE_TOGGLE & DEV_TOGGLE are toggled off", () => {
    expect(wrapper.find(".heading").isVisible());
  });
});
