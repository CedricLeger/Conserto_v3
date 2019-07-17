import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGaurdService } from './service/auth-guard.service';

const routes: Routes = [

{ path: '', redirectTo: 'users', pathMatch: 'full'},
{ path : 'login', component : LoginComponent},
{ path : 'logout', component : LoginComponent},
{ path: 'users', component : UserListComponent ,canActivate:[AuthGaurdService]},
{ path: 'add', component : CreateUserComponent,canActivate:[AuthGaurdService]},
{ path: 'detail/id', component: UserDetailsComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurdService]
})
export class AppRoutingModule { }
