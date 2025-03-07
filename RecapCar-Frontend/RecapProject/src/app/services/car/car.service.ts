import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../../models/car/carResponseModel';
import { ListResponseModel } from '../../models/listResponseModel';
import { Car } from '../../models/car/car';
import path from 'path';
import { CarImage } from '../../models/carImage/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44398/api/';
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarById(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbyid?id=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandid?id=" + brandId;
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbycolorid?id=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarImages(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/getbycarimages?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

}
