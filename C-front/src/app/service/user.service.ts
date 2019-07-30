import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuiltinMethod } from '@angular/compiler';
import { headersToString } from 'selenium-webdriver/http';
import { User } from '../module/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {




  private baseUrl = 'http://localhost:8082/springboot-crud-rest/api/v1/users';

  // test pour l'authentification
  email = 'test';
  password = 'test';
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUserRole(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  getUsersList(): Observable<any> {
    // return this.http.get(`${this.baseUrl}`);

   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});
   return this.http.get(`${this.baseUrl}`, {headers});
  }
}
