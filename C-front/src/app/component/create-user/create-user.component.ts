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

 role: string[];


user: User = new User();
submitted = false;

constructor(private userService: UserService,
            private router: Router) { }

ngOnInit() {
  this.role = ['User','Admin'
              ];
  }

newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    console.log(this.user);
    this.gotoList();

  }

onSubmit() {
    this.submitted = true;
    this.save();

  }

gotoList() {
    this.router.navigate(['/users']);

  }
}
