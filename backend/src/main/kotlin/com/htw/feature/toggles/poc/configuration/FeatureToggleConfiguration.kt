package com.htw.feature.toggles.poc.configuration

import org.springframework.stereotype.Component

enum class FeatureToggleEnum(
    val title: String,
    val description: String
) {
    USE_NEW_RETURN_MESSAGE("backend.returnMessage", "Returns new Message String"),
    SHOW_UI_BUTTON("frontend.uiButton", "Shows the new Button in the UI"),
    SAMPLE_TOGGLE("test.sampleToggle", "Ein weiterer Beispiel Toggle"),
    DEV_TOGGLE("dev.sampleToggle", "Live Demo Toggle"),
}

@Component
class FeatureToggleConfiguration {
    fun getToggles(): List<String> = FeatureToggleEnum.values().map { it.name }
}