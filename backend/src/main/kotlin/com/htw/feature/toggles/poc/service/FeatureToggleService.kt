package com.htw.feature.toggles.poc.service

import com.htw.feature.toggles.poc.configuration.FeatureToggleConfiguration
import com.htw.feature.toggles.poc.model.FeatureToggle
import com.htw.feature.toggles.poc.repository.FeatureToggleRepository
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Service

@Service
class FeatureToggleService(
    private val featureToggleRepository: FeatureToggleRepository,
    private val featureToggleConfiguration: FeatureToggleConfiguration,
)  {

    // get From DB and safe to DB on any of the function calls
    private val featureToggles = mutableMapOf<String, FeatureToggle>()

    @EventListener(ApplicationReadyEvent::class)
    fun initToggles() {
        var toggles = cleanUpDB()
        toggles.forEach {
            featureToggles[it.name] = it
        }
        featureToggleConfiguration.getToggles().filter { !toggles.map { t -> t.name }.contains(it) }.forEach { toggle ->
            var featureToggle = FeatureToggle(name = toggle)
            featureToggles[toggle] = featureToggle
            featureToggleRepository.save(featureToggle)
        }
        println("FeatureToggles initialized!")
    }

    private fun cleanUpDB(): MutableList<FeatureToggle> {
        var dbToggles = featureToggleRepository.getAllByOrderById()
        var removeToggles = dbToggles.filter { !featureToggleConfiguration.getToggles().contains(it.name) }.toList()
        featureToggleRepository.deleteAll(removeToggles)
        println("Unused Toggles have been removed from DB!")

        return dbToggles.filter { !removeToggles.contains(it) }.toMutableList()
    }

    fun updateToggle(toggle: FeatureToggle) {
        var dbToggle = featureToggleRepository.getByName(toggle.name)
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

    fun getFeatureToggles(): MutableMap<String, FeatureToggle> = featureToggles

}