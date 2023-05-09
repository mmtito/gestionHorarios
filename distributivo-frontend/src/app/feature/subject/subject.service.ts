import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Paginable, SubjectSelect } from './subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient,
    ) {}
  

  private initialUrlSubject = environment.URL+'/api/subject';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };

  public findbyNameSelect(value : string): Observable<SubjectSelect[]>{

    return this.http.get<SubjectSelect[]>(`${this.initialUrlSubject}/select/${value}`, this.httpOptions);

  }


  public findPaginable(): Observable<Paginable>{

    return this.http.get<Paginable>(`${this.initialUrlSubject}`, this.httpOptions)

  }

}
