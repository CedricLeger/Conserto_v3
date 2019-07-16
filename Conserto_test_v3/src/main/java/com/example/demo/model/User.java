package com.example.demo.model;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.example.demo.model.Role;



@Entity
@Table(name ="users",uniqueConstraints = @UniqueConstraint(columnNames = "email"))

public class User {

    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    

 
   
//    @ManyToMany(cascade=CascadeType.MERGE)
//    @JoinTable(
//       name="user_roles",
//       joinColumns={@JoinColumn(name="USER_ID", referencedColumnName="ID")},
//       inverseJoinColumns={@JoinColumn(name="ROLE_ID", referencedColumnName="ID")})
//    private List<Role> roles;

    

    public User() {
}

	public User(String firstName, String lastName, String email,String password) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.email = email;
         this.password = password;
    }
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
        public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
 
    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
 
    @Column(name = "last_name", nullable = false)
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
 
    @Column(name = "email", nullable = false)
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email= email;
    }
    @Column(name = "password", nullable = false)
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password= password;
    }

//    public List <Role> getRoles() {
//        return roles;
//    }
//
//    public void setRoles(List <Role> roles) {
//        this.roles = roles;
//    }

    @Override
    public String toString() {
        return "User{" +
            "id=" + id +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", email='" + email + '\'' +
            ", password='" + "*********" + '\'' +
//            ", roles=" + roles +
            '}';
    }

}