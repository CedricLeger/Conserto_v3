import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/module/categorie';
import { Observable } from 'rxjs';
import { CategorieService } from 'src/app/service/categorie.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/module/user';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

categories: Observable<Categorie>;
user: Observable<User>;

// vote: Observable<Vote>;


  constructor(private categorieService: CategorieService,
              private router: Router,
              // private voteService: VoteService
              private userService: UserService ) { }



  ngOnInit() {
  }

  reloadData() {
    this.categories = this.categorieService.getCategorieList();
    // this.vote = this.voteService.getVoteList();
  }
  voteForCategorie() {
     // récuperer l'id utilisateur de celui qui veut voter
    // si l'utilisateur n'a pas d'objet vote en bdd a son id utilisateur
    // récuperer l'id categorie du choix utilisateur
    // crée l'objet vote contenant (id, date ,categorie_id,user_id) le sauvegarder

  }
  collectVotePerCategorie() {
    // compte les objets votes:
    // compter les objets votes par catégorie
    // afficher les votes totals
    // affiche les votes par catégorie
  }
}
