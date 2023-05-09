import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './models/location';
import { LocationDto } from './models/locationDto';
import { environment } from 'src/environments/environment';
import ResponseApp from 'src/app/models/responseApi';
import { pageable } from 'src/app/models/pageable';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient,
  ) {}

  public listLocations: LocationDto ={

    capacity : 0,
    totalPages : 0,
    locations : [],
    page : 0,
    total : 0

  }


  private initialUrlLocation = environment.URL+'/api/location';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };

  public getLocations = (opt : pageable): Observable<LocationDto> => {
    return this.http.get<LocationDto>(`${this.initialUrlLocation}?page=${opt.page}&count=${opt.count}`, this.httpOptions);
  };

  public findAllLocations(){
    return this.http.get<Location[]>(`${this.initialUrlLocation}/findAll`)
  } 

  public getLocationByName(name : string) : Observable<Location[]>{
    return this.http.get<Location[]>(`${this.initialUrlLocation}/find/${name}`,this.httpOptions);
  }

  public getLocation = (id: string): Observable<Location> => {
    return this.http.get<Location>(
      `${this.initialUrlLocation}/${id}`,
      this.httpOptions
    );
  };

  public saveLocation = (newLocation: Location): Observable<Location> => {
    return this.http.post<Location>(
      this.initialUrlLocation,
      newLocation,
      this.httpOptions
    );
  };

  public updateLocation = (locationUpdate: Location): Observable<Location> => {
    return this.http.put<Location>(
      this.initialUrlLocation,
      locationUpdate,
      this.httpOptions
    );
  };

  public removeLocation(id: string): Observable<ResponseApp> {
    return this.http.get<ResponseApp>(
      `${this.initialUrlLocation}/delete/${id}`,
      this.httpOptions
    );
  }
  
  downloadFile() {
    return this.http.get<Blob>(`${this.initialUrlLocation}/export-to-excel`, 
    {
       observe: 'response', responseType: 'blob' as 'json'
    
    })
  }

  submitExcel(){
    
  } 

}
