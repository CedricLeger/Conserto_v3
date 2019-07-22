import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  private baseUrl = 'http://localhost:8082/springboot-crud-rest/api/v1/activities';



  constructor(private http: HttpClient) { }

  getActivity(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createActivity(activity: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, activity);
  }

  updateActivity(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteActivity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getActivitiesList(): Observable<any> {
   return this.http.get(this.baseUrl);
  }
}
