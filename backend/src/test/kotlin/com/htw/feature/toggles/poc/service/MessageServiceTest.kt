package com.htw.feature.toggles.poc.service

import com.htw.feature.toggles.poc.configuration.FeatureToggleEnum.*
import io.mockk.every
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.MockK
import io.mockk.junit5.MockKExtension
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(MockKExtension::class)
class MessageServiceTest {

    @MockK
    private lateinit var featureToggleService: FeatureToggleService

    @InjectMockKs
    private lateinit var messageService: MessageService

    @Test
    fun `should return the default message when feature toggle is off`() {
        val expected = "A sample return message because ${TOGGLE_1.name} was toggled off."
        every { featureToggleService.isFeatureEnabled(TOGGLE_1.name) } returns false

        val actual = messageService.createSampleMessage()

        assertEquals(expected, actual)
    }

    @Test
    fun `should not return the default message when feature toggle is on`() {
        val expected = "A different return message from the service because ${TOGGLE_1.name} was toggled on."
        every { featureToggleService.isFeatureEnabled(TOGGLE_1.name) } returns true

        val actual = messageService.createSampleMessage()

        assertEquals(expected, actual)
    }
}