package com.htw.feature.toggles.poc.service

import com.htw.feature.toggles.poc.model.FeatureToggle
import org.springframework.stereotype.Service

@Service
class FeatureToggleService {

    // get From DB and safe to DB on any of the function calls
    private val featureToggles = mutableMapOf<String, FeatureToggle>()

    fun addFeatureToggle(toggle: FeatureToggle) {
        featureToggles[toggle.name] = toggle
    }

    fun isFeatureEnabled(name: String): Boolean {
        return featureToggles[name]?.enabled ?: false
    }

    fun disableFeatureToggle(name: String) {
        featureToggles[name]?.enabled = false
    }

    fun getFeatureToggles() = featureToggles

}