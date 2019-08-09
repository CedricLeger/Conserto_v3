import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../module/activity';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  dataChange: BehaviorSubject<Activity[]> = new BehaviorSubject<Activity[]>([]);
  dialogData: any;
  private baseUrl = 'http://localhost:8082/springboot-crud-rest/api/v1/activities';



  constructor(private http: HttpClient) { }

  //test
  get data():Activity[]{
    return this.dataChange.value;
  }
  getDialogData() {
    console.log("dialog data : "+this.dialogData);
    return this.dialogData;
  }

  getActivity(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createActivity(activity: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, activity);
  }

  updateActivity(activity:Activity){


    return this.http.put(`${this.baseUrl}/${activity.id}`,activity).subscribe(data=>{
       this.dialogData = activity;
     });
   }
  // updateActivity(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  deleteActivity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getActivitiesList(): Observable<any> {
   return this.http.get(this.baseUrl);
  }
}
