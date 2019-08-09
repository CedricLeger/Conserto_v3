import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { AuthenticationService } from './service/authentication.service';

import { CreateActivitiesComponent } from './component/create-activities/create-activities.component';
import { CreateEventsComponent } from './component/create-events/create-events.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material';
import { ActivityListComponent } from './component/activity-list/activity-list.component';
import {MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,MatCardModule,MatMenuModule,MatIconRegistry} from '@angular/material'
import { MatTableModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material';
import { CreateCategorieComponent } from './component/create-categorie/create-categorie.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { SurveyComponent } from './component/survey/survey.component';
import { HomeComponent } from './component/home/home.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { EditActivityComponent } from './component/edit-activity/edit-activity.component';
import { EditEventComponent } from './component/edit-event/edit-event.component';
import { EditCategorieComponent } from './component/edit-categorie/edit-categorie.component';
import { ActivityDetailComponent } from './component/activity-detail/activity-detail.component';
import { EventDetailComponent } from './component/event-detail/event-detail.component';
import { ProposeEventComponent } from './component/propose-event/propose-event.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserListComponent,
    UserDetailsComponent,
    LoginComponent,
    CreateActivitiesComponent,
    CreateEventsComponent,
    ActivityListComponent,
    CreateCategorieComponent,
    CreateCategorieComponent,
    CategoriesComponent,
    SurveyComponent,
    HomeComponent,
    EditUserComponent,
    EditActivityComponent,
    EditEventComponent,
    EditCategorieComponent,
    ActivityDetailComponent,
    EventDetailComponent,
    ProposeEventComponent,









  ],
  entryComponents: [EditActivityComponent,EditEventComponent,EditCategorieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,

    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
 


  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
