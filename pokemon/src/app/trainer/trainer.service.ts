import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './Trainer';


@Injectable({
  providedIn: 'root'
})
export class TrainerService {

private apiUrl: string = environment.baseUrl + 'trainers.json'
private apiurl2: string = environment.baseUrl + 'id/trainers.json'


constructor(private http: HttpClient) { }

 gettrainers(): Observable<Trainer[]>{
    return this.http.get<Trainer[]>(this.apiUrl);
  }

gettrainersdetail(trainerid: number): Observable<Trainer[]>{
  const url = '${this.apiurl2}${trainerId}/trainers.json';
  return this.http.get<Trainer[]>(this.apiurl2);
}


}
