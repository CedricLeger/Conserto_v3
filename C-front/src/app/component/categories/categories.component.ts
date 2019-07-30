import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/module/categorie';
import { Observable } from 'rxjs';
import { ActivityService } from 'src/app/service/activity.service';
import { EventService } from 'src/app/service/event.service';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categorie: Observable<Categorie[]>;

  constructor(
              private categorieService: CategorieService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.reloadData();
  }
// pour les activités
  reloadData() {
    this.categorie = this.categorieService.getCategorieList();
  }

  deleteCategorie(id: number) {
    this.categorieService.deleteCategorie(id)
      .subscribe(
        data => {
          console.log(data);
          console.log(this.categorieService);
          this.reloadData();
        },
        error => console.log(error));
  }

  // AcitivtyDetails(id: number){
  //   this.router.navigate(['users/detail', id]);
  // }

}
