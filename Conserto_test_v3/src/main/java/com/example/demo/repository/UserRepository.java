package com.example.demo.repository;


import org.hibernate.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Role;
import com.example.demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	
	    User findByEmail(String email);
	    
//	    public void remove(Role role) {
//	        for(User user : role.getUsers()){
//	            user.getRoles().remove(role);
//	        }
//	        Session.remove(role);
//	    }
	}
