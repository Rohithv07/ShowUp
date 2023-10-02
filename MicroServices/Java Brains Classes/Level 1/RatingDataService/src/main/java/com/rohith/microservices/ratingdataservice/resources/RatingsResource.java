package com.rohith.microservices.ratingdataservice.resources;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rohith.microservices.ratingdataservice.model.Rating;
import com.rohith.microservices.ratingdataservice.model.UserRating;

@RestController
@RequestMapping("/ratingsdata")
public class RatingsResource {

	@GetMapping("/{movieId}")
	public Rating getMovieRating(@PathVariable String movieId) {
		return new Rating(movieId, 4);
	}

	@GetMapping("users/{userId}")
	public UserRating getUserRating(@PathVariable String userId) {
		List<Rating> ratings = Arrays.asList(new Rating("1234", 4), new Rating("5678", 3));
		UserRating userRating = new UserRating();
		userRating.setUserRating(ratings);
		return userRating;

	}
}