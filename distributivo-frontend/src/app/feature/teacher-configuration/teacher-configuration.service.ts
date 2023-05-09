import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagination } from './models/pagination';
import { TeacherConfigurationDto } from './models/teacherConfigurationDto';
import { environment } from 'src/environments/environment';
import ResponseApp from 'src/app/models/responseApi';
import { TeacherConfiguration } from './models/teacherConfiguration';
import { pageable } from 'src/app/models/pageable';
@Injectable({
  providedIn: 'root',
})
export class TeacherConfigurationnService {
  constructor(private http: HttpClient,
  ) {}

  public listTeacherConfigurations: Pagination ={

    capacity : 0,
    totalPages : 0,
    teacherConfigurations : [],
    page : 0,
    total : 0

  }


  private initialUrlTeacherConfigurations = environment.URL+'/api/teacher-configuration';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };

  public getTeacherConfigurations = (opt : pageable): Observable<Pagination> => {
    return this.http.get<Pagination>(`${this.initialUrlTeacherConfigurations}?page=${opt.page}&count=${opt.count}`, this.httpOptions);
  };

  public findAllTeacherConfigurations(){
    return this.http.get<TeacherConfigurationDto[]>(`${this.initialUrlTeacherConfigurations}/findAll`)
  } 

  public getTeacherConfigurationByName(name : string) : Observable<TeacherConfigurationDto[]>{
    return this.http.get<TeacherConfigurationDto[]>(`${this.initialUrlTeacherConfigurations}/find/${name}`,this.httpOptions);
  }

  public getTeacherConfiguration = (id: string): Observable<TeacherConfiguration> => {
    return this.http.get<TeacherConfiguration>(
      `${this.initialUrlTeacherConfigurations}/${id}`,
      this.httpOptions
    );
  };

  public saveTeacherConfiguration= (newTeacherConfiguration: TeacherConfiguration): Observable<TeacherConfiguration> => {
    return this.http.post<TeacherConfiguration>(
      this.initialUrlTeacherConfigurations,
      newTeacherConfiguration,
      this.httpOptions
    );
  };

  public updateTeacherConfiguration= (TeacherConfigurationUpdate: TeacherConfiguration): Observable<TeacherConfiguration> => {
    return this.http.put<TeacherConfiguration>(
      this.initialUrlTeacherConfigurations,
      TeacherConfigurationUpdate,
      this.httpOptions
    );
  };

  public removeTeacherConfiguration(id: string): Observable<ResponseApp> {
    return this.http.get<ResponseApp>(
      `${this.initialUrlTeacherConfigurations}/delete/${id}`,
      this.httpOptions
    );
  }
  public getConfigurationByTeacher(id : string, opt : pageable) : Observable<Pagination>{
    return this.http.get<Pagination>
    (`${this.initialUrlTeacherConfigurations}/teacher/${id}?count=${opt.count}&page=${opt.page}`
    ,this.httpOptions);
  }
  
  downloadFile() {
    return this.http.get<Blob>(`${this.initialUrlTeacherConfigurations}/export-to-excel`, 
    {
       observe: 'response', responseType: 'blob' as 'json'
    
    })
  }

  submitExcel(){
    
  } 

}
