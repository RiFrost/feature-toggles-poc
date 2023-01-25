package com.htw.feature.toggles.poc.repository

import com.htw.feature.toggles.poc.model.FeatureToggle
import org.springframework.data.jpa.repository.JpaRepository

interface FeatureToggleRepository : JpaRepository<FeatureToggle, Long> {

    fun getAllByOrderById(): MutableList<FeatureToggle>

    fun getByName(name: String): FeatureToggle?

}