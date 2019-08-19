import { Component, OnInit, Inject } from '@angular/core';
import { CategorieService } from 'src/app/service/categorie.service';
import { MatIconRegistry, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { EditCategorieComponent } from '../edit-categorie/edit-categorie.component';
import { Categorie } from 'src/app/module/categorie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vote-categorie',
  templateUrl: './vote-categorie.component.html',
  styleUrls: ['./vote-categorie.component.css']
})
export class VoteCategorieComponent implements OnInit {
  categories: Observable<Categorie[]>;
  categorie: Categorie= new Categorie();

  constructor(public dialogRef: MatDialogRef<EditCategorieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public eventService: EventService,
              private categorieService: CategorieService,
              private router: Router,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-thumb_up-24px.svg'));
      iconRegistry.addSvgIcon('thumbs-down', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-thumb_down-24px.svg'));
     }


  ngOnInit() {
    this.categories = this.categorieService.getCategorieList();

  }
  submit() {}
  refresh(): void {
    window.location.reload();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

stopEdit(id:number):void{
  this.categorie.id = id;
 this.categories = this.categorieService.getCategorie(this.categorie.id)
//  this.categories.pipe.
}
  // stopEdit(id:number): void {
  //   this.categorie.id = id;
  //   console.log('stop edit event:'+this.categorie.id);
  // this.categorieService.getCategorie(this.categorie.id);
  //   this.categorieService.updateCategorie(this.data);
  //   console.log('print de data' + this.data);

  // }
  positiveVote(){

  }
}
