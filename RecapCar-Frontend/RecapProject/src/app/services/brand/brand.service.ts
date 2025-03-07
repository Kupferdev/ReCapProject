import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../../models/brand/brandResponseModel';
import { ListResponseModel } from '../../models/listResponseModel';
import { Brand } from '../../models/brand/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44398/api/';
  constructor(private httpClient: HttpClient) { }

  getbrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  

}
