import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {


  private baseUrl = 'http://localhost:8082/springboot-crud-rest/api/v1/events';



  constructor(private http: HttpClient) { }

  getEvent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEvent(activity: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, event);
  }

  updateEvent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEventList(): Observable<any> {
   return this.http.get(this.baseUrl);
  }
}
