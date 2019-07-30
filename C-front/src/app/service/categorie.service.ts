import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../module/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  private baseUrl = 'http://localhost:8082/springboot-crud-rest/api/v1/categorie';

  // test pour l'authentification
  email = 'test';
  password = 'test';
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

  constructor(private http: HttpClient) { }

  getCategorie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategorie(categorie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, categorie);
  }

  updateCategorie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategorieList(): Observable<any> {
   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});
   return this.http.get(this.baseUrl, {headers});
  }
}
