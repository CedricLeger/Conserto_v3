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
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

categories: Observable<Categorie[]>;
user: Observable<User>;
vote: Vote = new Vote();
 categorie: Categorie = new Categorie();



  constructor(private categorieService: CategorieService,
              private router: Router,
              private voteService: VoteService,
              private userService: UserService ) { }

  dataSource = new CategorieDataSource(this.categorieService);
  displayedColumns = ["id", "name","nbOfLike" ,"action"];



  ngOnInit() {
    this.reloadData();
  }

  // voteButtonClick( id:number){
  //   this.categorieService.updateCategorie(this.categorie)
  //   .subscribe(
  //     data => {
  //       console.log('nblike1:'+ this.categorie.nbOfLike);
  //       this.categorie.nbOfLike = this.categorie.nbOfLike + 1;
  //       console.log('nblike2:'+ this.categorie.nbOfLike);
  //       console.log(data);
  //       console.log(this.userService);
  //       this.reloadData();
  //     },
  //     error => console.log(error));
  // }
  // voteButtonClick(id: number) {
  //   this.categorie.id = id;
  //   console.log(this.categorie.id);
  //   console.log(this.categorie);
  //   console.log(this.categorieService.getCategorie(this.categorie.id));
  //   this.categorieService.getCategorie(this.categorie.id).subscribe(
  //    data => {
  //      this.categorie = data;
  //      this.categorie.nbOfLike = this.categorie.nbOfLike + 1;
  //      this.categorieService.updateCategorie(this.categorie).subscribe(data => {
  //        this.categorie;
  //      });
  //    }
  //  );


  // }

  reloadData() {
    console.log(this.categorieService.getCategorieList());
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

export class CategorieDataSource extends DataSource<any> {
  constructor(private userService: CategorieService) {
    super();
  }
  connect():Observable<Categorie[]>{
    return this.userService.getCategorieList();
  }
  disconnect(){}


    }
