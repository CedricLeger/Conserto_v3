import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})



export class CreateUserComponent implements OnInit {

  public role = ['Administrateur', 'Utilisateur'];


user: User = new User();
submitted = false;

constructor(private userService: UserService,
            private router: Router) { }

ngOnInit() {
console.log(this.user);
  }

newUser(): void {
    this.submitted = false;
    this.user = new User();

  }

save() {

    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.user = new User();
    console.log(this.user.role);
    console.log('test : '+this.user);

    this.gotoList();

  }

onSubmit() {
    this.submitted = true;
    this.save();

  }

  // retour à la page User apres la création d'un User
gotoList() {
    this.router.navigate(['/users']);

  }
}
