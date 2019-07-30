package com.example.demo.controller;

import java.sql.Time;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Activity;
import com.example.demo.model.Event;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.ActivityRepository;
import com.example.demo.repository.EventRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;

@RestController @CrossOrigin("*")
@RequestMapping("/api/v1/events")


public class EventController {
	
   
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    
    @Autowired
    private EventRepository eventRepository;
    


    @RequestMapping(method = RequestMethod.GET)
   public List<Event> getAllEvents(){ 
   	
       return eventRepository.findAll();
   }
   
    @RequestMapping(value= "/{id}",method = RequestMethod.GET)
    public ResponseEntity<Event> getEventById(@PathVariable(value = "id") Long eventId)
        throws ResourceNotFoundException {
    	  Event event = eventRepository.findById(eventId)
          .orElseThrow(() -> new ResourceNotFoundException("Activity not found for this id :: " + eventId));
        return ResponseEntity.ok().body(event);
    }
    
    
    @PostMapping("")

    public Event createEvent(@Valid @RequestBody Event event,BindingResult result)  {
    	
    	
    		return createEventIfNotFound(event.getName(),event.getContent(),event.getDate(),event.getLocalisation(),event.getUsers());
    }
private final Event createEventIfNotFound(final String name,final String content ,final Date date ,final String localisation,final Collection<User> users) {
    	
    	Event event = eventRepository.findByName(name);
    	if(event == null) {
    		event = new Event();
    		event.setName(name);
    		event.setContent(content);
    		event.setLocalisation(localisation);
    		event.setDate(date);
    		
    		}
//    	event.setUsers(users);
    	event = eventRepository.save(event);
    	return event;
    }

@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
public Map<String, Boolean> deleteActivity(@PathVariable(value = "id") Long eventId)
     throws ResourceNotFoundException {
    Event event = eventRepository.findById(eventId)
   .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));

    eventRepository.delete(event);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return response;
}
}