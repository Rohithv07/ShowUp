package com.rohith.microservices.discoveryserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiscoveryServerEurekaApplication.class, args);
	}

}
