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
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  providers: [CarService, BrandService, ColorService],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.css'
})
export class CarPageComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  brandFilter: number;
  colorFilter: number;
  currentCar: Car;


  constructor(private carService: CarService, private brandService: BrandService, private colorService: ColorService, private router: Router) { }
  ngOnInit(): void {
    this.getCars();
    this.getBrands();
    this.getColors();
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

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe(response => {
      this.cars = response.data;
    })
  }

  goToCarDetail(carId: number): void {
    this.router.navigate(['/cars/cardetail', carId]);
  }
}
