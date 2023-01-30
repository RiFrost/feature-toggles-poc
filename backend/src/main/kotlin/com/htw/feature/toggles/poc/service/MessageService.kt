package com.htw.feature.toggles.poc.service

import com.htw.feature.toggles.poc.configuration.FeatureToggleEnum.*
import org.springframework.stereotype.Service

@Service
class MessageService(
    private val featureToggleService: FeatureToggleService
) {

    fun createSampleMessage(): String {
        if(featureToggleService.isFeatureEnabled(TOGGLE_1.name)) {
            return "A different return message from the service because ${TOGGLE_1.name} was toggled on."
        }

        return "A sample return message because ${TOGGLE_1.name} was toggled off."
    }

}