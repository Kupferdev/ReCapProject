import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../../models/customer/customerResponseModel';
import { ListResponseModel } from '../../models/listResponseModel';
import { Customer } from '../../models/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44398/api/customers/getalldetail';

  constructor(private httpClient:HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
