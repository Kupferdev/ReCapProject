import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers: [PaymentService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {


  
  constructor(private paymentService : PaymentService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
