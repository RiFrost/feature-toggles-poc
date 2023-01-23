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
@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:5173"])
@RequestMapping("/api")
class FeatureToggleController(
    private val featureToggleService: FeatureToggleService
) {

    @GetMapping("/test")
    fun testEndpoint(): ResponseEntity<Map<String, FeatureToggle>> {
        val toggle1 = FeatureToggle(enabled = false, name = "Leons Toggle")
        val toggle2 = FeatureToggle(enabled = true, name = "Lilys Toggle")
        val toggle3 = FeatureToggle(enabled = true, name = "Isis Toggle")

        featureToggleService.addFeatureToggle(toggle1)
        featureToggleService.addFeatureToggle(toggle2)
        featureToggleService.addFeatureToggle(toggle3)

        return ResponseEntity.ok(featureToggleService.getFeatureToggles())
    }

    @PostMapping("/updateToggle")
    fun updateToggle(@RequestBody toggle: FeatureToggle): ResponseEntity<String> {
        featureToggleService.updateToggle(toggle)

        return ResponseEntity.ok("Updated Toggle ${toggle.name}")
    }

}

