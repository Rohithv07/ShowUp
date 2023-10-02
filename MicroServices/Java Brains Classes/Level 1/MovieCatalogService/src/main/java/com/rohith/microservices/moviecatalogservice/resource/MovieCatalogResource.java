package com.rohith.microservices.moviecatalogservice.resource;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.rohith.microservices.moviecatalogservice.model.CatalogItem;
import com.rohith.microservices.moviecatalogservice.model.Movie;
import com.rohith.microservices.moviecatalogservice.model.UserRating;

@RestController
@RequestMapping("/catalog")
public class MovieCatalogResource {

	@Autowired
	private RestTemplate restTemplate;
	
	

	@GetMapping("/{userId}")
	public List<CatalogItem> getCatalog(@PathVariable String userId) {

		// Movie movie = restTemplate.getForObject("http://localhost:8081/movies/foo",
		// Movie.class);
		// get all rated movie id's
		UserRating ratings = restTemplate.getForObject("http://localhost:8083/ratingsdata/users/" + userId,
				UserRating.class);
		// then for each movie id, call movie info service and get details
		return ratings.getUserRating().stream().map(rating -> {
			Movie movie = restTemplate.getForObject("http://localhost:8082/movies/" + rating.getMovieId(), Movie.class);
			// put them all together
			return new CatalogItem(movie.getName(), "Science fiction", rating.getRating());
		}).collect(Collectors.toList());

//		return Collections.singletonList(new CatalogItem("Interstellar", "Science fiction", 8));
	}
}
