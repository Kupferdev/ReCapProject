import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand/brand';
import { BrandService } from '../../services/brand/brand.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [BrandService],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;
  currentBrand:Brand;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getbrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
