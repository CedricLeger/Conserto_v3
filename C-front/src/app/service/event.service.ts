import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../module/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  dataChange: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
  dialogData: any;
  private baseUrl = 'http://localhost:8082/springboot-crud-rest/api/v1/events';



  constructor(private http: HttpClient) { }


  get data():Event[]{
    return this.dataChange.value;
  }
  getDialogData() {
    console.log("dialog data : "+this.dialogData);
    return this.dialogData;
  }

  getEvent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEvent(event: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, event);
  }
  updateEvent(event:Event){


    return this.http.put(`${this.baseUrl}/${event.id}`,event).subscribe(data=>{
       this.dialogData = event;
     });
   }
  // updateEvent(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEventList(): Observable<any> {
   return this.http.get(this.baseUrl);
  }
}
