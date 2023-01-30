package com.htw.feature.toggles.poc.controller

import com.htw.feature.toggles.poc.model.FeatureToggle
import com.htw.feature.toggles.poc.service.FeatureToggleService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class FeatureToggleController(
    private val featureToggleService: FeatureToggleService
) {

    @GetMapping("/test")
    fun testEndpoint(): ResponseEntity<Map<String, FeatureToggle>> {
        return ResponseEntity.ok(featureToggleService.getFeatureToggles())
    }

    @PostMapping("/updateToggle")
    fun updateToggle(@RequestBody toggle: FeatureToggle): ResponseEntity<String> {
        featureToggleService.updateToggle(toggle)

        return ResponseEntity.ok("Updated Toggle ${toggle.name}")
    }

}

