import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarDetailsComponent } from "../car-details/car-details.component";
import { CarComponent } from "../car/car.component";
import { CarPipePipe } from "../../pipes/car/car-pipe.pipe";
import { Car } from '../../models/car/car';
import { CarService } from '../../services/car/car.service';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand/brand.service';
import { Brand } from '../../models/brand/brand';
import { HttpClientModule } from '@angular/common/http';
import { ColorService } from '../../services/color/color.service';
import { Color } from '../../models/color/color';


@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [CarService, BrandService, ColorService],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.css'
})
export class CarPageComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  currentCar: Car;


  constructor(private carService: CarService, private brandService: BrandService, private colorService: ColorService, private router: Router) { }
  ngOnInit(): void {
    this.getCars();
    this.getBrands();
    this.getColors();
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getCurrentCarClass(car: Car) {
    if (car == this.currentCar) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

  getBrands() {
    this.brandService.getbrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=> {
      this.colors = response.data;
    })
  }

  goToCarDetail(carId: number): void {
    this.router.navigate(['/cars/cardetail', carId]);
  }
}
