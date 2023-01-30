package com.htw.feature.toggles.poc.configuration

import org.springframework.stereotype.Component

enum class FeatureToggleEnum {
    TOGGLE_1,
    TOGGLE_2,
    TOGGLE_3
}

@Component
class FeatureToggleConfiguration {
    fun getToggles(): List<String> = FeatureToggleEnum.values().map { it.name }
}