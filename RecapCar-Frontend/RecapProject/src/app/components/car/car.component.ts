import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car/car';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  providers: [CarService],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;

  constructor(private carService:CarService) {}
  
  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response=> {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
}
