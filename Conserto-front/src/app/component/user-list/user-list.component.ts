// import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from 'rxjs';
import { HttpClientService, User } from '../../service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: Observable<User[]>;

  constructor(private httpClient: HttpClientService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.user = this.httpClient.getUserList();
  }

  deleteUser(id: number) {
    this.httpClient.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
