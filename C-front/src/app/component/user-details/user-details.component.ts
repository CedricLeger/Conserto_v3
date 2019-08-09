import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/module/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
id: number;
user: User;


  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(data=>{
      console.log(data)
      this.user = data;}, error=> console.log(error));
    }

}
