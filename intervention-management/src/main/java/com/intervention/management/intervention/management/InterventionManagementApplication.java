package com.intervention.management.intervention.management;


import com.intervention.management.intervention.management.Entity.Company;
import com.intervention.management.intervention.management.Services.SerCompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import java.util.Arrays;


@SpringBootApplication
@ComponentScan(basePackages = "com.intervention.management.intervention.management.*")
@EntityScan("com.intervention.management.intervention.management.*")

public class InterventionManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(InterventionManagementApplication.class, args);
	}
	 	

}
