import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental/rental.service';
import { Rental } from '../../models/rental/rental';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule],
  providers: [RentalService],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
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
