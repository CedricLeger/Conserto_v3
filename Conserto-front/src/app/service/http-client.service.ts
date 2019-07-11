import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/user';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class HttpClientService {


   private baseUrl = 'http://localhost:8080/api/v1';


  constructor(private httpClient: HttpClient) {}

  getUserList(): Observable<any> {

     const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    // Authorization: 'authkey ' + btoa('admin:admin')});
     return this.httpClient.get(`${this.baseUrl}`);

    // return this.httpClient.get(this.baseUrl, {headers});
  }

  getUser(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
}

 createUser(user: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
updateUser(id: number , value: any): Observable<Object>{
  return this.httpClient.put(`${this.baseUrl}/${id}`, value);
}

deleteUser(id: number): Observable<any> {
  return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  ;
  }




  // public deleteUser(id: number): Observable<any> {
  //   return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // public createUser(user: Object): Observable<Object> {
  //   return this.httpClient.post(`${this.baseUrl}`, user);

  // }


}

