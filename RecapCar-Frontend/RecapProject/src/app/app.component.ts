import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrandComponent } from "./components/brand/brand.component";
import { HttpClientModule } from '@angular/common/http';
import { ColorComponent } from "./components/color/color.component";
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from "./components/customer/customer.component";
import { RentalComponent } from "./components/rental/rental.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BrandComponent, CarComponent, HttpClientModule, ColorComponent, CustomerComponent, RentalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecapProject';
}
