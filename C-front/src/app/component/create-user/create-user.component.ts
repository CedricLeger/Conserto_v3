import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/module/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/module/role';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  // public role =["ROLE_USER","ROLE_ADMIN"];

  // Pour la gestion d'un formulaire, il est préférable d'utiliser ReactiveForms d'Angular
  // Voici un peu de doc => https://angular.io/guide/reactive-forms
  // Je vais te faire un exemple ici dont tu pourras t'inspirer par la suite
  public createUserFormGroup: FormGroup;

  // private noramlement je fasi un test
  public user: User = new User();


  public submitted = false;

  constructor(private userService: UserService,
              private router: Router,
              private _formBuilder: FormBuilder) { }

  // Ici on va utiliser FormBuilder qui est la manière plus propres de créer un FormGroup et ses controls.
  // On pourrait le faire manuellement mais ça deviendrait très vite une tâche un peu trop répètitive.
  //
  // Le FormGroup doit être initialiser impérativement lors de l'initialisation du component
  ngOnInit() {
    console.log(this.user);

    // Le Validators.required permet de faire automatiquement un bloquage quand le champ n'est pas remplis
    // Le Validators.email permet de vérifier que le champ contient bien une adresse mail
    // D'autres validators pourrait être créer pour forcer une strategie de mot de passe
    this.createUserFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // admin : [''],
        // roles: ['']
    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();

  }

  save() {
    // if (this.user.admin) {
    //   this.user.roles = 'ROLE_ADMIN';
    // } else {
    // this.user.roles = 'ROLE_USER';
    // }
    console.log('test1 : ' + this.user);
    this.userService.createUser(this.user)
    // rajouter un role au user avant l'enregistrement
      .subscribe(data => console.log(data), error => console.log(error));
    // this.user = new User();

    console.log('test 2: ' + this.user);
    // console.log('role :' + this.user.roles);
    this.gotoList();

  }

  onSubmit() {
    this.submitted = true;

    // Cette boucle permet de mapper automatiquement l'objet User avec les valeurs qui seront dans les controls.
    // On pourrait le faire manuellement i.e. = this.user.email = this.createUserFormGroup.get('email').value
    // Mais moi je suis un flémard du coup j'ai fais une boucle qui fait le job à ma place :D
    Object.keys(this.createUserFormGroup.controls).forEach(key => {
      this.user[key] = this.createUserFormGroup.get(key).value;
    });
    this.save();
    this.gotoList();
  }

  // retour à la page User apres la création d'un User
  gotoList() {
    this.router.navigate(['/users']);

  }
}
