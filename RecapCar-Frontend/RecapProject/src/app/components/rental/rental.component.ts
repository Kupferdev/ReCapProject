import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental/rental.service';
import { RentalDetails } from '../../models/rental/rentalDetails';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule],
  providers: [RentalService],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {
  rentals: RentalDetails[] = [];
  dataLoaded = false;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.rentalService.getRentals().subscribe(response => {
      this.rentals = response.data;
      this.dataLoaded = true;
    })
  }
}
