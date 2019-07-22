import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'src/app/module/activity';
import { ActivityService } from 'src/app/service/activity.service';


@Component({
  selector: 'app-create-activities',
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.css']
})
export class CreateActivitiesComponent implements OnInit {


  // Pour la gestion d'un formulaire, il est préférable d'utiliser ReactiveForms d'Angular
  // Voici un peu de doc => https://angular.io/guide/reactive-forms
  // Je vais te faire un exemple ici dont tu pourras t'inspirer par la suite
  public createActivitiesFormGroup: FormGroup;


  public activity: Activity = new Activity();
  public submitted = false;

  constructor(private activityService: ActivityService,
              private router: Router,
              private _formBuilder: FormBuilder) { }

  // Ici on va utiliser FormBuilder qui est la manière plus propres de créer un FormGroup et ses controls.
  // On pourrait le faire manuellement mais ça deviendrait très vite une tâche un peu trop répètitive.
  //
  // Le FormGroup doit être initialiser impérativement lors de l'initialisation du component
  ngOnInit() {
    console.log(this.activity);

    // Le Validators.required permet de faire automatiquement un bloquage quand le champ n'est pas remplis
    // Le Validators.email permet de vérifier que le champ contient bien une adresse mail
    // D'autres validators pourrait être créer pour forcer une strategie de mot de passe
    this.createActivitiesFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      localisation: ['', Validators.required],
      description: ['', Validators.required],
      cover: [''],
      date: ['', Validators.required],
      time: ['',],
     })
  }

  newActivity(): void {
    this.submitted = false;
    this.activity = new Activity();

  }

  save() {

    this.activityService.createActivity(this.activity)
      .subscribe(data => console.log(data), error => console.log(error));
    console.log('test : ' + this.activity);
    this.gotoList();

  }
  onSubmit() {
    this.submitted = true;

    // Cette boucle permet de mapper automatiquement l'objet User avec les valeurs qui seront dans les controls.
    // On pourrait le faire manuellement i.e. = this.user.email = this.createUserFormGroup.get('email').value
    // Mais moi je suis un flémard du coup j'ai fais une boucle qui fait le job à ma place :D
    Object.keys(this.createActivitiesFormGroup.controls).forEach(key => {
      this.activity[key] = this.createActivitiesFormGroup.get(key).value;
    });
    this.save();
    this.gotoList();
  }

  // retour à la page User apres la création d'un User
  gotoList() {
    this.router.navigate(['/users']);

  }
}

