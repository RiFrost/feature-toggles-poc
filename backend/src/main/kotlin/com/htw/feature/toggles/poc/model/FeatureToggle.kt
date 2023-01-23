package com.htw.feature.toggles.poc.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "feature_toggles")
data class FeatureToggle(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "serial")
    val id: Long = 0,

    @Column(name = "enabled")
    var enabled: Boolean = false,

    @Column(name = "name")
    val name: String
)