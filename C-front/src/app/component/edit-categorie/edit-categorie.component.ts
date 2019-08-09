import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategorieService } from 'src/app/service/categorie.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent  {
  constructor(
    public dialogRef: MatDialogRef<EditCategorieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public categorieService: CategorieService,
    private _formBuilder: FormBuilder
  ) {}

  formControl = this._formBuilder.group({
    name: ['', Validators.required],
  });





  // getErrorMessage() {
  // return this.formControl.hasError('required') ? 'Required field' :
  // this.formControl.hasError('email') ? 'Not a valid email' :
  // '';
  // }

  submit() {}
  refresh(): void {
    window.location.reload();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    console.log("fonction stop edit");

    this.categorieService.updateCategorie(this.data);
    console.log("print de data" + this.data);
    this.refresh();
  }
}
