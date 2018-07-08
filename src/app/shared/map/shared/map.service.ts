import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private geocoder;

  constructor(private http: HttpClient) {}

  getcodeLocation(location: string): any {
    const API = 'AIzaSyACdBQTyIaLF56LYJjO0JcOIt_92AW_zow';
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API}`).pipe(
      map(data => (<any>data).results[0].geometry.location),
      catchError( err => {throw Error('Something goes wring...'); })
    );
  }
}
