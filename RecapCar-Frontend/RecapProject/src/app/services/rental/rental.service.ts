import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../../models/rental/rentalResponseModel';
import { ListResponseModel } from '../../models/listResponseModel';
import { RentalDetails } from '../../models/rental/rentalDetails';
import { Rental } from '../../models/rental/rental';
import { ResponseModel } from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl= 'https://localhost:44398/api/';

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetails>>{
    let newPath = this.apiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetails>>(newPath);
  }

  getRentalsByCarId(carId:number):Observable<ListResponseModel<RentalDetails>>{
    let newPath = this.apiUrl + "rentals/getdetailsbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<RentalDetails>>(newPath);
  }

  addRental(rental : Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + "rentals/add";
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
}
