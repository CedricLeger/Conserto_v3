package com.example.demo.controller;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Categorie;
import com.example.demo.model.Event;
import com.example.demo.model.User;
import com.example.demo.repository.CategorieRepository;

@RestController @CrossOrigin("*")
@RequestMapping("/api/v1/categorie")

public class CategorieController {
	
	@Autowired
	private CategorieRepository categorieRepository;

	@RequestMapping(method = RequestMethod.GET)
	   public List<Categorie> getAllCategorie(){ 
	   	
	       return categorieRepository.findAll();
	   }
	   	     
	    @PostMapping("")
	    public Categorie createCategorie( Categorie categorie)  {
	   
	    		return createCategorieIfNotFound(categorie.getName());
	    }
	private final Categorie createCategorieIfNotFound(final String name) {
//		String testName = "bbbbbbb";
		String testName = name;
			
	    	Categorie categorie = categorieRepository.findByName(name);
	    	if(categorie == null) {
	    		categorie = new Categorie();
	    		categorie.setName(testName);
	    		
	    		
	    		}
	    	System.out.println(categorie);
	    	categorie = categorieRepository.save(categorie);
	    	return categorie;
	    }

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public Map<String, Boolean> deleteCategorie(@PathVariable(value = "id") Long categorieId)
	     throws ResourceNotFoundException {
		Categorie categorie = categorieRepository.findById(categorieId)
	   .orElseThrow(() -> new ResourceNotFoundException("Categorie not found for this id :: " + categorieId));

		categorieRepository.delete(categorie);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
	    return response;
	}
	
}