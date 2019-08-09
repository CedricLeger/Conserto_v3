import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService } from 'src/app/service/event.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent  {

  constructor(
    public dialogRef: MatDialogRef<EditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public eventService: EventService,
    private _formBuilder: FormBuilder
  ) {}

  formControl = this._formBuilder.group({
    name: ["", Validators.required],
    localisation: ["", Validators.required],
    content: ["", Validators.required],
    date: ["", Validators.required],

  });



  submit() {}
  refresh(): void {
    window.location.reload();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    console.log("stop edit event");
    this.eventService.updateEvent(this.data);
    console.log("print de data" + this.data);
    this.refresh();
  }
}




