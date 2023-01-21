package com.htw.feature.toggles.poc.controller

import com.htw.feature.toggles.poc.model.FeatureToggle
import com.htw.feature.toggles.poc.service.FeatureToggleService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:5173"])
@RequestMapping("/api")
class FeatureToggleController(
    private val featureToggleService: FeatureToggleService
) {

    @GetMapping("/test")
    fun testEndpoint(): ResponseEntity<Map<String, FeatureToggle>> {
        val toggle1 = FeatureToggle(false, "Leons Toggle")
        val toggle2 = FeatureToggle(true, "Lilys Toggle")
        val toggle3 = FeatureToggle(true, "Isis Toggle")

        featureToggleService.addFeatureToggle(toggle1)
        featureToggleService.addFeatureToggle(toggle2)
        featureToggleService.addFeatureToggle(toggle3)

        return ResponseEntity.ok(featureToggleService.getFeatureToggles())
    }

}

