import { Routes } from '@angular/router';
import path from 'path';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

export const routes: Routes = [
    {path:"", component:CarComponent},
    {path: "cars", component : CarComponent},
    {path: "cars/cardetail/:carId", component:CarDetailsComponent},
    {path: "cars/brand/:brandId", component:CarComponent},
    {path: "cars/color/:colorId", component:CarComponent}


];
