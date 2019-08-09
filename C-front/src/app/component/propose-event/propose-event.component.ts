import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Categorie } from 'src/app/module/categorie';
import { CategorieService } from 'src/app/service/categorie.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-propose-event',
  templateUrl: './propose-event.component.html',
  styleUrls: ['./propose-event.component.css']
})
export class ProposeEventComponent implements OnInit {
categories: Observable<Categorie[]>;
categorie: Categorie = new Categorie();
  constructor(private categorieService: CategorieService,
              private router: Router,
              iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) {
                iconRegistry.addSvgIcon('thumbs-up',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-thumb_up-24px.svg'));
                iconRegistry.addSvgIcon('thumbs-down',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-thumb_down-24px.svg'));
               }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    this.categories = this.categorieService.getCategorieList();
}
positiveVote(id: number){
  // console.log(this.categorieService.getCategorie(id));
  // this.categorieService.getCategorie(id).
// positiveVote(id:number){
//   this.categorie.id = id;


//   this.categorieService..subscribe(result => {
//     if (result === 1) {
//      const foundIndex= this.categorieService.dataChange.value.findIndex(x => x.id === this.categorie.id);
//       // for delete we use splice in order to remove single object from DataService
//       this.categorieService.dataChange.value[foundIndex] = this.categorieService.getDialogData();
//       // this.refreshTable();

//   }
//   });
//   }



}





// negativeVote(id: number){



// }
// }
