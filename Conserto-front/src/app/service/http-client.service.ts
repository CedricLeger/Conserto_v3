import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User {
  constructor(
    public Id: number,
    public last_name: string,
    public first_name: string,
    public email: string,
    public password: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})


export class HttpClientService {


   private baseUrl = 'http://localhost:8081/';


  constructor(private httpClient: HttpClient) {}

  getUserList(): Observable<any> {

    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*',
    Authorization: 'authkey ' + btoa('admin:admin')});


    return this.httpClient.get(this.baseUrl, {headers});
  }

  getUser(id: number): Observable<any> {
      return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  public createUser(user: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);

  }

  getHeaders() {
    const email = 'root';
    const password = '1234512345';

    const basicString = 'Basic ' + window.btoa(email + ':' + password);
    return basicString;
  }
}

