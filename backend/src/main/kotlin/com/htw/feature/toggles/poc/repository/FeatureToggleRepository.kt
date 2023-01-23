package com.htw.feature.toggles.poc.repository

import com.htw.feature.toggles.poc.model.FeatureToggle
import org.springframework.data.jpa.repository.JpaRepository

interface FeatureToggleRepository : JpaRepository<FeatureToggle, Long> {

    override fun findAll(): MutableList<FeatureToggle>

    fun findByName(name: String): FeatureToggle?

}