import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditInfo } from '../../models/creditInfo/creditInfo';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = 'https://localhost:44398/api/';

  constructor(private httpClient : HttpClient) { }

  addPay(creditInfo : CreditInfo){
    let newPath = this.apiUrl + "payments/pay";
    this.httpClient.post<boolean>(newPath, creditInfo);
  }

}
