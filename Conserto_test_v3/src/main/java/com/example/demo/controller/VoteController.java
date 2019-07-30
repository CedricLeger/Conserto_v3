package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Categorie;
import com.example.demo.model.Vote;
import com.example.demo.repository.VoteRepository;

@RestController @CrossOrigin("*")
@RequestMapping("/api/v1/vote")

public class VoteController {

	VoteRepository voteRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	   public List<Vote> getAllCategorie(){ 
	   	
	       return voteRepository.findAll();
	   }
	   	     
}
