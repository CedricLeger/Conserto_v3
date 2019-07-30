import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from 'src/app/module/activity';
import { Categorie } from 'src/app/module/categorie';
import { CategorieService } from 'src/app/service/categorie.service';
import { Observable } from 'rxjs';
import { CommandName } from 'selenium-webdriver';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {

  public createCategorieFormGroup: FormGroup;


  public categorie: Categorie = new Categorie();

  public submitted = false;

  constructor(private categorieService: CategorieService,
              private router: Router,
              private _formBuilder: FormBuilder){}


ngOnInit() {
    console.log(this.categorie);


    this.createCategorieFormGroup = this._formBuilder.group({

      name: ['', Validators.required],
     });



  }

newCategorie(): void {
    this.submitted = false;
    this.categorie = new Categorie();

  };

save() {
  console.log(this.categorie.name);
  console.log(this.categorie);
  this.categorieService.createCategorie(this.categorie)
      .subscribe(data => console.log(data), error => console.log(error));
  console.log('test : ' + this.categorie);
  this.gotoList();

  }
onSubmit() {

    this.submitted = true;

    // this.categorie.name = this.createCategorieFormGroup.get(name).value;
    Object.keys(this.createCategorieFormGroup.controls).forEach(key => {
      this.categorie[key] = this.createCategorieFormGroup.get(key).value;
    });
    // console.log(this.categorie.name);
    this.save();
    this.gotoList();
  }


gotoList(){
    this.router.navigate(['/allcategorie']);

  }




// deleteCategorie(id: number) {
//   this.categorieService.deleteCategorie(id)
//     .subscribe(
//       data => {
//         console.log(data);
//         console.log(this.categorieService);
//         this.reloadData();
//       },
//       error => console.log(error));

// }
// reloadData() {
//   this.categorie = this.categorieService.getCategorieList();
// }



//   public createCategorieFormGroup: FormGroup;


//   // public categorie: Categorie = new Categorie();
//   public submitted = false;
//   categorie: Observable<Categorie>;

//   constructor(private categorieService: CategorieService,
//               private router: Router,
//               private _formBuilder: FormBuilder) { }


//   ngOnInit() {
//     console.log(this.categorie);
//     this.reloadData();


//     this.createCategorieFormGroup = this._formBuilder.group({

//       name: ['', Validators.required],

//      })
//   }

//   newCategorie(): void {
//     this.submitted = false;



//   }

//   save() {

//     this.categorieService.createCategorie(this.categorie)
//       .subscribe(data => console.log(data), error => console.log(error));
//     console.log('test : ' + this.categorie);


//   }
//   deleteCategorie(id: number) {
//     this.categorieService.deleteCategorie(id)
//       .subscribe(
//         data => {
//           console.log(data);
//           console.log(this.categorieService);
//           this.reloadData();
//         },
//         error => console.log(error));
//   }
//   onSubmit() {
//     this.submitted = true;


//     Object.keys(this.createCategorieFormGroup.controls).forEach(key => {
//       this.categorie[key] = this.createCategorieFormGroup.get(key).value;
//     });
//     this.save();

//   }
//   reloadData() {

//     this.categorie = this.categorieService.getCategorieList();
//   }

// }
}
