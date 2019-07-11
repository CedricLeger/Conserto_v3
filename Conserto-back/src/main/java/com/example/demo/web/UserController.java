package com.example.demo.web;


import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins= "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	
	//5 API REST a developper ici 
    @Autowired
    private UserRepository userRepository;

    //Get all pour la liste entière

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //recherche par id 
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
        User user = userRepository.findById(Id)
          .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + Id));
        return ResponseEntity.ok().body(user);
    }
    //création d'un user
    @PostMapping("/users")
    public User createEmployee(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }
    //update d'un user
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long Id,
         @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
       User user = userRepository.findById(Id)
        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + Id));

        user.setId(userDetails.getId());
        user.setLastName(userDetails.getLastName());
        user.setFirstName(userDetails.getFirstName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }
    //suppresion d'un user par l'id
    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
        User user = userRepository.findById(Id)
       .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + Id));

    userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
}