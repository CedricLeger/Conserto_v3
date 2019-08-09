import { Component, OnInit } from "@angular/core";
import { Categorie } from "src/app/module/categorie";
import { Observable, BehaviorSubject } from "rxjs";
import { ActivityService } from "src/app/service/activity.service";
import { EventService } from "src/app/service/event.service";
import { Router } from "@angular/router";
import { CategorieService } from "src/app/service/categorie.service";
import { DataSource} from '@angular/cdk/table';
import { interval, Subscription } from 'rxjs';
import { EditCategorieComponent } from '../edit-categorie/edit-categorie.component';
import { MatDialog } from '@angular/material';



@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {


  categories: Observable<Categorie[]>;
  categorie: Categorie = new Categorie();
  editCategorie :Categorie = new Categorie();

  constructor(
    private categorieService: CategorieService,
    private router: Router,
    private dialog: MatDialog
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
  startEdit(id:number,name:string){
    this.editCategorie.id = id;
    const dialogRef = this.dialog.open(EditCategorieComponent, {
      data:{id:id,name:name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.categorieService.dataChange.value.findIndex(x => x.id === this.editCategorie.id);
        // for delete we use splice in order to remove single object from DataService
        this.categorieService.dataChange.value[foundIndex] = this.categorieService.getDialogData();
        // this.refreshTable();

    }
    });
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
