import { Component, OnInit } from "@angular/core";
import { Categorie } from "src/app/module/categorie";
import { Observable } from "rxjs";
import { ActivityService } from "src/app/service/activity.service";
import { EventService } from "src/app/service/event.service";
import { Router } from "@angular/router";
import { CategorieService } from "src/app/service/categorie.service";
import { DataSource} from '@angular/cdk/table';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {


  categories: Observable<Categorie[]>;
  categorie: Categorie = new Categorie();

  constructor(
    private categorieService: CategorieService,
    private router: Router
  ) {}

  dataSource = new CategorieDataSource(this.categorieService);
  displayedColumns = ["id", "name","nbOfLike" ,"action"];

  ngOnInit() {

    this.reloadData();
  }

  reloadData() {
    this.categories = this.categorieService.getCategorieList();
  }

  deleteCategorie(id: number) {
    this.categorieService.deleteCategorie(id).subscribe(
      data => {

        this.dataSource = new CategorieDataSource(this.categorieService)
        console.log(data);
        console.log(this.categorieService);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  updateCategorie(id:number){

  }

  // AcitivtyDetails(id: number){
  //   this.router.navigate(['users/detail', id]);
  // }
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
