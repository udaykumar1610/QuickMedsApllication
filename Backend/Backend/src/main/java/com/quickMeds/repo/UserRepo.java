package com.quickMeds.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quickMeds.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{
	public User findByUsername(String username);
}
