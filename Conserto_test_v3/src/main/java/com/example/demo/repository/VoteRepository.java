package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Vote;

public interface VoteRepository extends JpaRepository <Vote , Long> {
	
	

}
