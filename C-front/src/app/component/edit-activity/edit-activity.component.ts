import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivityService } from "src/app/service/activity.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit-activity",
  templateUrl: "./edit-activity.component.html",
  styleUrls: ["./edit-activity.component.css"]
})
export class EditActivityComponent {


  constructor(
    public dialogRef: MatDialogRef<EditActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public activityService: ActivityService,
    private _formBuilder: FormBuilder
  ) {}

  formControl = this._formBuilder.group({
    name: ["", Validators.required],
    localisation: ["", Validators.required],
    content: ["", Validators.required],
    cover: [""],
    condition:[""],
    date: ["", Validators.required],
    time: [""]
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

    this.activityService.updateActivity(this.data);
    console.log("print de data" + this.data);
    this.refresh();
  }
}
