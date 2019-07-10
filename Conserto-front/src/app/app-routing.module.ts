import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UserListComponent } from './component/user-list/user-list.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'createuser', component: CreateUserComponent,canActivate:[AuthGaurdService]},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'userlist', component:UserListComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
