import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Rental } from './rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  getRentals(): Observable<Rental[]> {
    /*const observables: Observable<Rental[]> = of(this.rentals);
    return observables;*/
    return this.http.get<Rental[]>('/api/v1/rentals');
  }

  getRentalById(rentalId: string): Observable<Rental> {
    console.log(rentalId);
    return this.http.get<Rental>(`/api/v1/rentals/${rentalId}`);
  }
}
