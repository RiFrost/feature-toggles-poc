package com.htw.feature.toggles.poc.service

import com.htw.feature.toggles.poc.model.FeatureToggle
import com.htw.feature.toggles.poc.repository.FeatureToggleRepository
import org.springframework.stereotype.Service

@Service
class FeatureToggleService(
    private val featureToggleRepository: FeatureToggleRepository
) {

    // get From DB and safe to DB on any of the function calls
    private val featureToggles = mutableMapOf<String, FeatureToggle>()

    fun addFeatureToggle(toggle: FeatureToggle) {
        if(featureToggleRepository.findByName(toggle.name) == null) {
            featureToggles[toggle.name] = toggle
            featureToggleRepository.save(toggle)
        }
    }

    fun updateToggle(toggle: FeatureToggle) {
        println(toggle)
        var dbToggle = featureToggleRepository.findByName(toggle.name)
        if(dbToggle != null) {
            dbToggle.enabled = !dbToggle.enabled
            featureToggles[dbToggle.name] = dbToggle
            featureToggleRepository.save(dbToggle)
        }
    }

    fun isFeatureEnabled(name: String): Boolean {
        return featureToggles[name]?.enabled ?: false
    }

    fun disableFeatureToggle(name: String) {
        featureToggles[name]?.enabled = false
    }

    fun enableFeatureToggle(name: String) {
        featureToggles[name]?.enabled = true
    }

    fun getFeatureToggles(): MutableMap<String, FeatureToggle> {
        if(featureToggles.isEmpty()) {
            for(toggle in featureToggleRepository.findAll()) {
                featureToggles[toggle.name] = toggle
            }
        }

        return featureToggles
    }

}