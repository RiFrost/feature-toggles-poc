package com.htw.feature.toggles.poc.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class TestClass(val key1: String, val key2: String)

@RestController
@CrossOrigin
@RequestMapping("/api")
class FeatureToggleController {

    @GetMapping("/test")
    fun testEndpoint(): ResponseEntity<String> {
        val returnObject = TestClass("Value1", "Value2")
        return ResponseEntity.ok(returnObject.toString())
    }

}

