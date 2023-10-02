package com.rohith.springsecurity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rohith.springsecurity.models.AuthenticationRequest;
import com.rohith.springsecurity.models.AuthenticationResponse;
import com.rohith.springsecurity.services.MyUserDetailsService;
import com.rohith.springsecurity.util.JwtUtil;

@RestController
public class WelcomeEndPoint {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private MyUserDetailsService userDetailsService;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@GetMapping("/hello")
	public String hello() {
		return "Welcome";
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {
		try {
			// takes request and do authentication
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		} catch (BadCredentialsException e) {
			// if any auth is wrong
			throw new Exception("Incorrect username or password", e);
		}
		// load the username
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		// generate the jwt token
		final String jwt = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}

}
