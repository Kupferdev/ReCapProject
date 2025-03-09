import { Component } from '@angular/core';
import { NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrandComponent } from "./components/brand/brand.component";
import { HttpClientModule } from '@angular/common/http';
import { ColorComponent } from "./components/color/color.component";
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from "./components/customer/customer.component";
import { RentalComponent } from "./components/rental/rental.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarDetailsComponent } from "./components/car-details/car-details.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BrandComponent, HttpClientModule, ColorComponent, CustomerComponent, RentalComponent, RouterModule, CommonModule, CarDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecapProject';
  isCarDetailPage = false;


  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCarDetailPage = event.urlAfterRedirects.startsWith('/cars/cardetail/');
      }
    });
  }
}
