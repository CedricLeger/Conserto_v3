package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.configuration.SetupDataLoader;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Activity;
import com.example.demo.model.Event;
import com.example.demo.model.Privilege;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.ActivityRepository;
import com.example.demo.repository.EventRepository;
import com.example.demo.repository.PrivilegeRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.demo.configuration.SetupDataLoader;
//import com.example.demo.service.UserService;

@RestController @CrossOrigin("*")
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    private RoleRepository roleRepository;
//    private ActivityRepository activityRepository;
    private PrivilegeRepository privilegeRepository;
//    private EventRepository eventRepository;
  
   
//    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;




    
    @GetMapping("/users")
    public List<User> getAllUsers(){ 
    	//test
//    	System.out.println("TEST : "+roleRepository.findByName("ROLE_USER"));
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
        throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
          .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
        System.out.println(user);
        return ResponseEntity.ok().body(user);
    }
    
    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user,BindingResult result)  {
    	
    	
    		return createUserIfNotFound(user.getEmail(),user.getFirstName(),user.getLastName(),user.getPassword(),user.getRoles());
    }

    
   
    public final User createUserIfNotFound(final String email, final String firstName, final String lastName, final String password,  final List<Role> roles) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
        	
            user = new User();
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setPassword(passwordEncoder.encode(password));
            user.setEmail(email);


        }
        List<Role> r = new ArrayList<>();
        if (roles != null) {
        	r.addAll(roles);
        }
        Role test = roleRepository.findByName("ROLE_USER");
        r.add(test) ;
        
        user.setRoles(r);
        user = userRepository.save(user);
        return user;
    }

	@PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
         @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
        .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

        user.setEmail(userDetails.getEmail());
        user.setLastName(userDetails.getLastName());
        user.setFirstName(userDetails.getFirstName());
        user.setPassword(userDetails.getPassword());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId)
         throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
       .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    
    //test
	@GetMapping(produces = "application/json")
	@RequestMapping({ "/" })
	
	public User validateLogin() {
		return new User();
	}
	 // == create initial privileges
    
}
	
	
