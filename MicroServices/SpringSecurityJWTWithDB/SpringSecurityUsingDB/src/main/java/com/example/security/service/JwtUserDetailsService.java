package com.example.security.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.security.model.UserCredentialDto;
import com.example.security.model.UserCredentials;
import com.example.security.repository.UserCredentialRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserCredentialRepository userCredentialRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserCredentials user = userCredentialRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("Username is not found, please check this :" + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	
	public UserCredentials save(UserCredentialDto user) {
		UserCredentials newUser = new UserCredentials();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userCredentialRepository.save(newUser);
	}

}
