import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car/car';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [CarService],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  currentCar:Car;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"]);
      } else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"]);
      }
      else {
        this.getCars();
      }
    })
  }

    setCurrentCar(car:Car){
      this.currentCar = car;
    }
  
    getCurrentCarClass(car:Car){
      if(car == this.currentCar){
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
    }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
}
