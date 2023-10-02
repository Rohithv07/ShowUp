package com.example.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.security.model.UserCredentials;

public interface UserCredentialRepository extends JpaRepository<UserCredentials, Long>{
	UserCredentials findByUsername(String username);
}
