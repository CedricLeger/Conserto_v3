import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Categorie } from '../module/categorie';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  dataChange: BehaviorSubject<Categorie[]> = new BehaviorSubject<Categorie[]>([]);
  dialogData: any;
  private baseUrl = 'http://localhost:8082/springboot-crud-rest/api/v1/categorie';

  // test pour l'authentification


  constructor(private http: HttpClient) { }


  get data():Categorie[]{
    return this.dataChange.value;
  }
  getDialogData() {
    console.log("dialog data : "+this.dialogData);
    return this.dialogData;
  }


  getCategorie(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  // getCategorie(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  createCategorie(categorie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, categorie);
  }

  // updateCategorie(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }
  updateCategorie(categorie:Categorie){

    return this.http.put(`${this.baseUrl}/${categorie.id}`,categorie).subscribe(data=>{
       this.dialogData = categorie;
     });
   }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategorieList(): Observable<any> {
  //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});
   return this.http.get(this.baseUrl);
  }
}
