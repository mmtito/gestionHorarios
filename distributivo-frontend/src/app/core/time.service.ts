import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { day, hour } from '../models/time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(

    private http: HttpClient
  ) { }
  private initialTimeUrl =  environment.URL+'/api/time/';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };

  public getHours(){
return this.http.get<hour[]>(this.initialTimeUrl + "hour", this.httpOptions)
  }

  public getDays(){
    return this.http.get<day[]>(this.initialTimeUrl + "day", this.httpOptions)
      }
}
