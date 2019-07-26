import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Event } from 'src/app/module/event';
import { ActivityService } from 'src/app/service/activity.service';
import { EventEmitter } from 'events';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  eventForm: FormGroup;
  eventPreferences = [
    { id: 1, genre: 'Pop' },
    { id: 2, genre: 'Rock' },
    { id: 3, genre: 'Techno' },
    { id: 4, genre: 'Hiphop' }
];


  // Pour la gestion d'un formulaire, il est préférable d'utiliser ReactiveForms d'Angular
  // Voici un peu de doc => https://angular.io/guide/reactive-forms
  // Je vais te faire un exemple ici dont tu pourras t'inspirer par la suite
  public createEventsFormGroup: FormGroup;


  public event: Event = new Event();
  public submitted = false;

  constructor(private eventService: EventService,
              private router: Router,
              private _formBuilder: FormBuilder,
  )
              {

                // const formControls = this.eventPreferences.map(control => new FormControl(false));

                // // Simply add the list of FormControls to the FormGroup as a FormArray
                // this.eventForm = this.fb.group({
                //   eventPreferences: new FormArray(formControls)

            // });


            }
  ngOnInit() {
    console.log(this.event);


    this.createEventsFormGroup = this._formBuilder.group({

      name: ['', Validators.required],
      localisation: ['', Validators.required],
      content: ['', Validators.required],
      date: ['', Validators.required],



     });



  }

  newEvent(): void {
    this.submitted = false;
    this.event = new Event();

  }

  save() {

    this.eventService.createEvent(this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    console.log('test : ' + this.event);
    this.gotoList();

  }
  onSubmit() {
    this.submitted = true;


    Object.keys(this.createEventsFormGroup.controls).forEach(key => {
      this.event[key] = this.createEventsFormGroup.get(key).value;
    });
    this.save();
    this.gotoList();
  }


  gotoList() {
    this.router.navigate(['/activities']);

  }
}

