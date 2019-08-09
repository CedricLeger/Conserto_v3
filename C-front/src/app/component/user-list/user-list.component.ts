import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/module/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { MatTableModule, MatDialog } from '@angular/material'
import {MatTableDataSource} from '@angular/material/table';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { getDefaultService } from 'selenium-webdriver/edge';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;
  user: User = new User()

  constructor(private userService: UserService,
              private router: Router,
              private dialog: MatDialog) {}




dataSource = new UserDataSource(this.userService);
displayedColumns = ['id', 'firstname', 'lastname', 'email', 'action'];


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
startEdit(id:number,firstName:string,lastName:string,email:string){
this.user.id = id;
const dialogRef = this.dialog.open(EditUserComponent, {
  data:{id:id, firstName:firstName ,lastName: lastName ,email:email}
});

dialogRef.afterClosed().subscribe(result => {
  if (result === 1) {
    const foundIndex = this.userService.dataChange.value.findIndex(x => x.id === this.user.id);
    // for delete we use splice in order to remove single object from DataService
    this.userService.dataChange.value[foundIndex]= this.userService.getDialogData();
    // this.refreshTable();

}
});
}
userDetails(id: number) {
  this.router.navigate(['/detail', id]);
}
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

