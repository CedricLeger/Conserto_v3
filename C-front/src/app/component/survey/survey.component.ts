import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/module/categorie';
import { Observable } from 'rxjs';
import { CategorieService } from 'src/app/service/categorie.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/module/user';
import { Vote } from 'src/app/module/vote';
import { VoteService } from 'src/app/service/vote.service';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

categories: Observable<Categorie>;
user: Observable<User>;
vote: Vote = new Vote();
categorie: Categorie= new Categorie();



  constructor(private categorieService: CategorieService,
              private router: Router,
              private voteService: VoteService,
              private userService: UserService ) { }



  ngOnInit() {
    this.reloadData();
  }

  voteButtonClick(){

    this.categorie.nbOfLikes++;
  }

  reloadData() {
    this.categories = this.categorieService.getCategorieList();
    // this.vote = this.voteService.getVoteList();
  }
  voteForCategorie() {
     // récuperer l'id utilisateur de celui qui veut voter

    //  if (this.user.id == sessionStorage.getItem('id'){

    //  };
    // si l'utilisateur n'a pas d'objet vote en bdd a son id utilisateur

    // récuperer l'id categorie du choix utilisateur
    // crée l'objet vote contenant (id, date ,categorie_id,user_id) le sauvegarder

  }
  collectVotePerCategorie() {
    // compte les objets votes:
    // compter les objets votes par catégorie
    // aficher les votes totals
    // affiche les votes par catégorie
  }
}
