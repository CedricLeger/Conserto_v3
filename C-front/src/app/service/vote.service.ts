import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {





private baseUrl = 'http://localhost:8082/springboot-crud-rest/api/v1/vote';



constructor(private http: HttpClient) { }

getVote(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}

createVotee( vote:Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}`, event);
}

updateVote(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteVote(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}

getVoteList(): Observable<any> {
 return this.http.get(this.baseUrl);
}
}
