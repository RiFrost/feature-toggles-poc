package com.htw.feature.toggles.poc.configuration

import org.springframework.stereotype.Component

private enum class ToggleEnum {
    TOGGLE_1,
    TOGGLE_2,
    TOGGLE_3
}

@Component
class FeatureToggleConfiguration {
    fun getToggles(): List<String> = ToggleEnum.values().map { it.name }
}