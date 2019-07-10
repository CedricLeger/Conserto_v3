import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from './../../service/http-client.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  // voir ce qu'il faut mettre a la place de null pour un parametre de type nombre
  user: User = new User(null, '', '', '', '');

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createUser(): void {
    this.httpClientService.createUser(this.user)
        .subscribe( data => {
          alert('User created successfully.');
        });

  };

}
