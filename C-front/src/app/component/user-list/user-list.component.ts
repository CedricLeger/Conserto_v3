import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/module/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material'
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;
  user: User = new User()

  constructor(private userService: UserService,
              private router: Router) {}




dataSource = new UserDataSource(this.userService);
displayedColumns = ['id', 'firstname', 'lastname', 'email', 'role', 'action'];


  ngOnInit() {
    this.reloadData();

  }

  reloadData() {

    this.users = this.userService.getUsersList();
    console.log(this.users);
  }

  deleteUser(id: number) {
    console.log("voici l'id :" );
    this.userService.deleteUser(id)
      .subscribe(
        data => {

          this.dataSource = new UserDataSource(this.userService)
          console.log(data);
          console.log(this.userService);
          this.reloadData();
        },
        error => console.log(error));
  }

  // userDetails(id: number) {
  //   this.router.navigate(['users/detail', id]);
  // }
}

export class UserDataSource extends DataSource<any> {
constructor(private userService: UserService) {
  super();
}
connect(): Observable<User[]>{
  return this.userService.getUsersList();
}
disconnect(){}


  }
  // applyFilter(filterValue: string) {
  //   this.users.filter = filterValue.trim().toLowerCase();
  // }

