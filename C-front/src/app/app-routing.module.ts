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
import { SurveyComponent } from './component/survey/survey.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { HomeComponent } from './component/home/home.component';
import { ActivityDetailComponent } from './component/activity-detail/activity-detail.component';
import { EventDetailComponent } from './component/event-detail/event-detail.component';
import { ProposeEventComponent } from './component/propose-event/propose-event.component';

const routes: Routes = [

{ path: '', redirectTo: 'users', pathMatch: 'full'},
{ path : 'login', component : LoginComponent},
{ path : 'logout', component : LoginComponent},
{ path: 'users', component : UserListComponent , canActivate: [AuthGaurdService]},
{ path: 'add', component : CreateUserComponent, canActivate: [AuthGaurdService]},
{ path: 'detail/:id', component: UserDetailsComponent,canActivate: [AuthGaurdService]},
{ path: 'categorie', component : CreateCategorieComponent,canActivate: [AuthGaurdService]},
{ path: 'allcategorie', component : CategoriesComponent,canActivate: [AuthGaurdService]},
{ path: 'survey', component : SurveyComponent,canActivate: [AuthGaurdService]},
{ path: 'home', component : HomeComponent , canActivate: [AuthGaurdService]},
{ path: 'activities/activitydetail/:id',component : ActivityDetailComponent,canActivate: [AuthGaurdService]},
{ path: 'activities/eventdetail/:id',component : EventDetailComponent,canActivate: [AuthGaurdService]},
{ path: 'proposedevent', component : ProposeEventComponent,canActivate: [AuthGaurdService]},



{ path: 'edituser', component : EditUserComponent ,canActivate: [AuthGaurdService]},
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
