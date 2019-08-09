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


public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String localisation;
    private String content;
    private boolean condition;
    private boolean cover;
    private Date date;
   
    
    @ManyToMany
    @JoinTable(
        name = "activities_users",
        joinColumns = @JoinColumn(
            name = "activity_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(
            name = "user_id", referencedColumnName = "id"))
    private Collection<User> users;

    public Activity() {
        super();
    }

	public Activity(String name, String localisation, String content, boolean condition, boolean cover, Date date,
			 Collection<User> users) {
		super();
		this.name = name;
		this.localisation = localisation;
		this.content = content;
		this.condition = condition;
		this.cover = cover;
		this.date = date;
		this.users = users;
	}


	public Activity(String name, String localisation, String content, boolean condition, boolean cover, Date date
			) {
		super();
		this.name = name;
		this.localisation = localisation;
		this.content = content;
		this.condition = condition;
		this.cover = cover;
		this.date = date;
		
	}


	public Activity(String name, String localisation, String content, boolean cover, Date date) {
		super();
		this.name = name;
		this.localisation = localisation;
		this.content = content;
		this.cover = cover;
		this.date = date;
		
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

	public boolean isCondition() {
		return condition;
	}

	public void setCondition(boolean condition) {
		this.condition = condition;
	}

	public boolean isCover() {
		return cover;
	}

	public void setCover(boolean cover) {
		this.cover = cover;
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
				+ ", condition=" + condition + ", cover=" + cover + ", date=" + date + " users="
				+ users + "]";
	}
		

  
  
}
