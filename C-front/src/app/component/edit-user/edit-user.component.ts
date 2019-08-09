import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/module/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService,private _formBuilder: FormBuilder) { }

formControl = this._formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required],
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],

});
// getErrorMessage() {
// return this.formControl.hasError('required') ? 'Required field' :
// this.formControl.hasError('email') ? 'Not a valid email' :
// '';
// }

submit() {

}
refresh(): void {
  window.location.reload();
}

onNoClick(): void {
this.dialogRef.close();
}

stopEdit(): void {

  console.log('fonction stop edit');

  this.userService.updateUser(this.data);
  console.log('print de data'+this.data);
  this.refresh();
}

}
