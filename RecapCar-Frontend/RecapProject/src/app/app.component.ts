import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrandComponent } from "./components/brand/brand.component";
import { HttpClientModule } from '@angular/common/http';
import { ColorComponent } from "./components/color/color.component";
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from "./components/customer/customer.component";
import { RentalComponent } from "./components/rental/rental.component";
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BrandComponent, HttpClientModule, ColorComponent, CustomerComponent, RentalComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecapProject';


constructor(private router:Router) {}

  isHomePage():boolean{
    const hiddenRoutes = ['/cars/brand', '/cars/color', '/'];
    return hiddenRoutes.some(route => this.router.url.startsWith(route));
  }

}
