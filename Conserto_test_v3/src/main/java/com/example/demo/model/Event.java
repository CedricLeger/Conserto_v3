package com.example.demo.model;


import java.sql.Time;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;



import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class)


public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String localisation;
    private String content;
    private Date date;

    
    @ManyToMany
    @JoinTable(
        name = "events_users",
        joinColumns = @JoinColumn(
            name = "event_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(
            name = "user_id", referencedColumnName = "id"))
    private Collection<User> users;

    public Event() {
        super();
    }

	public Event(String name, String localisation, String content, boolean cover, Date date,
			String time, Collection<User> users) {
		super();
		this.name = name;
		this.localisation = localisation;
		this.content = content;
		this.date = date;
		this.users = users;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocalisation() {
		return localisation;
	}

	public void setLocalisation(String localisation) {
		this.localisation = localisation;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Collection<User> getUsers() {
		return users;
	}

	public void setUsers(Collection<User> users) {
		this.users = users;
	}
	   
	@Override
	public String toString() {
		return "Activity [id=" + id + ", name=" + name + ", localisation=" + localisation + ", content=" + content
				+ ", date=" + date + ",  users=" + users + "]";
	}
		

  
  
}

