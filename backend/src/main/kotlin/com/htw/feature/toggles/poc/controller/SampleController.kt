package com.htw.feature.toggles.poc.controller

import com.htw.feature.toggles.poc.configuration.FeatureToggleEnum.*
import com.htw.feature.toggles.poc.service.FeatureToggleService
import com.htw.feature.toggles.poc.service.MessageService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class SampleController(
    private val messageService: MessageService
) {

    @GetMapping("/getSampleMessage")
    fun sampleEndpoint(): ResponseEntity<String> {
        return ResponseEntity.ok(messageService.createSampleMessage())
    }

}