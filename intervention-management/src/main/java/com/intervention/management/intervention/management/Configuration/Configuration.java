package com.intervention.management.intervention.management.Configuration;


import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@org.springframework.context.annotation.Configuration
@EnableJpaRepositories(basePackages = "com.intervention.management.intervention.management.Repository")
public class Configuration {
}
