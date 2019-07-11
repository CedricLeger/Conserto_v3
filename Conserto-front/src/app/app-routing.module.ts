import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
 import { AuthGaurdService } from './service/auth-gaurd.service';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UserListComponent } from './component/user-list/user-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  {path:'createuser',component : CreateUserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'users', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
