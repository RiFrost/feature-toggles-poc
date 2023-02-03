package com.htw.feature.toggles.poc.service

import com.htw.feature.toggles.poc.configuration.FeatureToggleEnum.*
import org.springframework.stereotype.Service

@Service
class MessageService(
    private val featureDecisionService: FeatureDecisionService
) {

    fun createSampleMessage(): String {
        if(featureDecisionService.useNewReturnMessage()) {
            return "A different return message from the service because the toggle was on."
        }

        return "A sample return message because the toggle was off."
    }

}