import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../../models/car/carResponseModel';
import { ListResponseModel } from '../../models/listResponseModel';
import { Car } from '../../models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl = 'https://localhost:44398/api/cars/getcardetails';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
