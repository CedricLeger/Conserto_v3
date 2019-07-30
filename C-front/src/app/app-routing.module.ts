import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { CreateActivitiesComponent } from './component/create-activities/create-activities.component';
import { CreateEventsComponent } from './component/create-events/create-events.component';
import { ActivityListComponent } from './component/activity-list/activity-list.component';
import { CreateCategorieComponent } from './component/create-categorie/create-categorie.component';
import { CategoriesComponent } from './component/categories/categories.component';

const routes: Routes = [

{ path: '', redirectTo: 'users', pathMatch: 'full'},
{ path : 'login', component : LoginComponent},
{ path : 'logout', component : LoginComponent},
{ path: 'users', component : UserListComponent , canActivate: [AuthGaurdService]},
{ path: 'add', component : CreateUserComponent, canActivate: [AuthGaurdService]},
{ path: 'users/detail/id', component: UserDetailsComponent},
{ path: 'categorie', component : CreateCategorieComponent},
{ path: 'allcategorie', component : CategoriesComponent},

{ path: 'createactivities', component: CreateActivitiesComponent, canActivate: [AuthGaurdService]},
{ path: 'createevent', component: CreateEventsComponent, canActivate: [AuthGaurdService]},
{ path: 'activities', component: ActivityListComponent, canActivate: [AuthGaurdService]}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurdService]
})
export class AppRoutingModule { }
