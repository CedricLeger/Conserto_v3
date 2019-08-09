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
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.ActivityRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;

@RestController @CrossOrigin("*")
@RequestMapping("/api/v1/activities")



public class ActivityController {
	
   
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    
    @Autowired
    private ActivityRepository activityRepository;
    

//    @GetMapping("/activities")
    @RequestMapping(method = RequestMethod.GET)
   public List<Activity> getAllActivities(){ 
   	
       return activityRepository.findAll();
   }
   

//    @GetMapping("/activities/{id}")
    @RequestMapping(value= "/{id}",method = RequestMethod.GET)
    public ResponseEntity<Activity> getActivityById(@PathVariable(value = "id") Long activityId)
        throws ResourceNotFoundException {
    	  Activity activity = activityRepository.findById(activityId)
          .orElseThrow(() -> new ResourceNotFoundException("Activity not found for this id :: " + activityId));
        return ResponseEntity.ok().body(activity);
    }
    
    
    @PostMapping("")
//    @RequestMapping(value = "/createactivities", method = RequestMethod.POST)
    public Activity createActivity(@Valid @RequestBody Activity activity,BindingResult result)  {
    	
    	
    		return createActivityIfNotFound(activity.getName(),activity.getContent(),activity.getDate(),activity.getLocalisation(),activity.getUsers(),activity.isCondition(),activity.isCover());
    }
private final Activity createActivityIfNotFound(final String name,final String content ,final Date date ,final String localisation,final Collection<User> users,final boolean condition, final boolean cover) {
    	
    	Activity activity = activityRepository.findByName(name);
    	if(activity == null) {
    		activity = new Activity();
    		activity.setName(name);
    		activity.setContent(content);
    		activity.setLocalisation(localisation);
    		activity.setDate(date);
    		activity.setCondition(condition);
    		activity.setCover(cover);
    		}
//    	activity.setUsers(users);
    	activity = activityRepository.save(activity);
    	return activity;
    }
//@DeleteMapping(path="/createactivities/{id}")
@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
public Map<String, Boolean> deleteActivity(@PathVariable(value = "id") Long activityId)
     throws ResourceNotFoundException {
    Activity activity = activityRepository.findById(activityId)
   .orElseThrow(() -> new ResourceNotFoundException("Activity not found for this id :: " + activityId));

    activityRepository.delete(activity);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return response;
}

@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
public ResponseEntity<Activity> updateActivity(@PathVariable(value = "id") Long activityId,
     @Valid @RequestBody Activity activityDetails) throws ResourceNotFoundException {
   Activity activity = activityRepository.findById(activityId)
    .orElseThrow(() -> new ResourceNotFoundException("Activity not found for this id :: " + activityId));

    activity.setName(activityDetails.getName());
    activity.setContent(activityDetails.getContent());
    activity.setLocalisation(activityDetails.getLocalisation());
    activity.setDate(activityDetails.getDate());
    activity.setCondition(activityDetails.isCondition());
    activity.setCover(activityDetails.isCover());
  
    final Activity updatedActivity = activityRepository.save(activity);
    return ResponseEntity.ok(updatedActivity);
}

   
}

    