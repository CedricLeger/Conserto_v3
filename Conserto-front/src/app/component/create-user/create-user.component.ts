import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './../../service/http-client.service';
import { Router } from '@angular/router';
import { User } from 'src/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  // voir ce qu'il faut mettre a la place de null pour un parametre de type nombre
  user: User = new User();
  submitted = false;



  constructor(
    private httpClientService: HttpClientService ,
    private router: Router)

   { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User ();
  }

  save() {

    this.httpClientService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/users']);
  }


  onSubmit() {
    this.submitted = true;
    this.save();
  }


  // createUser(): void {
  //   this.httpClientService.createUser(this.user)
  //       .subscribe( data => {
  //         alert('User created successfully.');
  //       });

  }


