import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer/customer';
import { CustomerService } from '../../services/customer/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  providers: [CustomerService],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  dataLoaded = false;

  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
      this.dataLoaded = true;
    })
  }

}
