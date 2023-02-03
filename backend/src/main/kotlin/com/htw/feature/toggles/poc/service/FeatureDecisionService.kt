package com.htw.feature.toggles.poc.service

import com.htw.feature.toggles.poc.configuration.FeatureToggleEnum.*
import org.springframework.stereotype.Service

@Service
class FeatureDecisionService(
    private val featureToggleService: FeatureToggleService
) {

    fun useNewReturnMessage(): Boolean {
        return featureToggleService.isFeatureEnabled(USE_NEW_RETURN_MESSAGE)
    }

    fun useSampleToggleFunction(): Boolean {
        return featureToggleService.isFeatureEnabled(SAMPLE_TOGGLE)
    }

}