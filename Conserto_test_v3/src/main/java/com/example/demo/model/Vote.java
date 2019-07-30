package com.example.demo.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


@Entity
@Table(name = "user_votes", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "date"}, name = "unique_vote")})
public class Vote {
		@Id 
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long Id;
	
	 @ManyToOne(fetch = FetchType.EAGER, optional = false)
	    @JoinColumn(name = "user_id",referencedColumnName = "id", nullable = false)
	    @OnDelete(action = OnDeleteAction.CASCADE)
	    @NotNull
	    private User user;

	    @ManyToOne(fetch = FetchType.EAGER, optional = false)
	    @JoinColumn(name = "categorie_id",referencedColumnName = "id", nullable = false)
	    @OnDelete(action = OnDeleteAction.CASCADE)
	    @NotNull
	    private Categorie categorie;

	    @Column(name = "date", nullable = false)
	    @NotNull
	private LocalDate date;

	    
	    //Constructors
		public Vote() {
			super();
		}

		public Vote(@NotNull User user, @NotNull Categorie categorie, @NotNull LocalDate date) {
			super();
			this.user = user;
			this.categorie = categorie;
			this.date = date;
		}

		public Vote(Long id, @NotNull User user, @NotNull Categorie categorie, @NotNull LocalDate date) {
			super();
			Id = id;
			this.user = user;
			this.categorie = categorie;
			this.date = date;
		}
	    
		
		//getter and setter
		public Long getId() {
			return Id;
		}

		public void setId(Long id) {
			Id = id;
		}

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		public Categorie getCategorie() {
			return categorie;
		}

		public void setCategorie(Categorie categorie) {
			this.categorie = categorie;
		}

		public LocalDate getDate() {
			return date;
		}

		public void setDate(LocalDate date) {
			this.date = date;
		}


		
	    
	    
	    
}
