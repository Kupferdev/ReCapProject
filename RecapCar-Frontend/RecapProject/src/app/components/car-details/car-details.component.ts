import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car/car';
import { CarImage } from '../../models/carImage/carImage';
import { response } from 'express';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [CarService],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  car: Car[] = [];
  carImages: CarImage[] = [];

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarById(params["carId"]);
        this.getCarImages(params["carId"]);
      }
    })
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe(response => {
      this.car = response.data;
      console.log(response.data);
    })
  }

  getCarImages(carId: number) {
    this.carService.getCarImages(carId).subscribe(response => {
      this.carImages = response.data;
    });

  }

}
