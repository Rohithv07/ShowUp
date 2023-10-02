package com.rohith.microservices.currencyexchangeservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import io.github.resilience4j.bulkhead.annotation.Bulkhead;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;

@RestController
public class CircuitBreakerController {
	private Logger logger = LoggerFactory.getLogger(CircuitBreakerController.class);

	@GetMapping("/sample-api")
	// @Retry(name = "sample-api", fallbackMethod = "hardcodedResponse") // retry may happen 3 times and then return error;
	@CircuitBreaker(name = "default", fallbackMethod = "hardcodedResponse")
	// @RateLimiter(name = "default")  // -> limit the number of calls for a specific api.
	@Bulkhead(name = "default")
	public String sampleApi() {
//		logger.info("Sample APi call received");
//		ResponseEntity<String> forEntity = new RestTemplate().getForEntity("http://localhost:8080/some-dummy-url",
//				String.class);
//		return forEntity.getBody();
		return "Sample Api";
	}
	
	public String hardcodedResponse(Exception ex) {
		return "fallback-response";
	}
}
