import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car/car';
import { CarImage } from '../../models/carImage/carImage';
import { response } from 'express';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RentalService } from '../../services/rental/rental.service';
import { RentalDetails } from '../../models/rental/rentalDetails';
import { Rental } from '../../models/rental/rental';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  providers: [CarService, RentalService],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  car: Car[] = [];
  currentCarId:number;
  rentals: RentalDetails[] = [];
  carImages: CarImage[] = [];
  isRentable: boolean = true;
  minDate = new Date().toISOString().slice(0, 16);
  maxDate = new Date(new Date().setDate(new Date().getDate() + 20)).toISOString().slice(0, 16);
  selectedDate:string;
  


  constructor(private carService: CarService, private rentalService: RentalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarById(params["carId"]);
        this.getCarImages(params["carId"]);
        this.getRentalsCar(params["carId"]);
      }
    })
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe(response => {
      this.car = response.data;
      this.currentCarId = carId;
    })
  }

  getCarImages(carId: number) {
    this.carService.getCarImages(carId).subscribe(response => {
      this.carImages = response.data;
    });
  }

  getRentalsCar(carId: number) {
    this.rentalService.getRentalsByCarId(carId).subscribe(response => {
      this.rentals = response.data;
      this.isRentable = true;

      this.rentals.forEach(rental => {
        if (!rental.isReturn) {
          this.isRentable = false;
        }
      });
    });
  }

  addRental(){
    const rental: Rental = {
      carId: this.currentCarId,
      customerId: 2,
      rentDate: new Date().toISOString(),
      returnDate: this.selectedDate,
      isReturn: false
    };
    console.log(rental);
    this.rentalService.addRental(rental).subscribe(response => {
      console.log(response.message);
    })

  }

}
