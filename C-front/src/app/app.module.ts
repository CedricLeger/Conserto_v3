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


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserListComponent,
    UserDetailsComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
