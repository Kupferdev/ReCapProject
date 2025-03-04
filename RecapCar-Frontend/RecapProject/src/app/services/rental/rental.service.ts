import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../../models/rental/rentalResponseModel';
import { ListResponseModel } from '../../models/listResponseModel';
import { Rental } from '../../models/rental/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl= 'https://localhost:44398/api/rentals/getall';

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
