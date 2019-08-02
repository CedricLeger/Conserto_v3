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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	   @GetMapping("/categorie/{id}")
	    public ResponseEntity<Categorie> getUserById(@PathVariable(value = "id") Long categorieId)
	        throws ResourceNotFoundException {
	        Categorie categorie = categorieRepository.findById(categorieId)
	          .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + categorieId));
	        System.out.println(categorie);
	        return ResponseEntity.ok().body(categorie);
	   }
	   	     
	   @RequestMapping(method=RequestMethod.POST)
	    public Categorie createCategorie( Categorie categorie)  {
	   
	    		return createCategorieIfNotFound(categorie.getName());
	    }
	   
	private final Categorie createCategorieIfNotFound(final String name) {
//		
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

	
	@PutMapping("/{id}")
    public ResponseEntity<Categorie> updateCategorie(@PathVariable(value = "id") Long categorieId,
         @Valid @RequestBody Categorie categorieDetails) throws ResourceNotFoundException {
        Categorie categorie = categorieRepository.findById(categorieId)
        .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + categorieId));

        categorie.setName(categorieDetails.getName());
        categorie.setNbOfLike(categorieDetails.getNbOfLike());
        final Categorie updatedCategorie = categorieRepository.save(categorie);
        return ResponseEntity.ok(updatedCategorie);
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
