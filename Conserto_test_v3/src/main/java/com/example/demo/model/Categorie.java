package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "categorie", uniqueConstraints = {@UniqueConstraint(columnNames = "name", name = "unique_categorie")}) 
public class Categorie {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
    private String name;
    private int nbOfLike=0;
    
    
    
    
    //constructors
    
    
	public Categorie(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}


	public Categorie(Long id, String name, int nbOfLike) {
		super();
		this.id = id;
		this.name = name;
		this.nbOfLike = nbOfLike;
	}


	public Categorie(String name) {
		super();
		this.name = name;
	}
	

	
	public Categorie() {
		super();
	}

	
	
	
//getter and setter
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


	public int getNbOfLike() {
		return nbOfLike;
	}


	public void setNbOfLike(int nbOfLike) {
		this.nbOfLike = nbOfLike;
	}


	@Override
	public String toString() {
		return "Categorie [id=" + id + ", name=" + name + ", nbOfLike=" + nbOfLike + "]";
	}



    
    
}