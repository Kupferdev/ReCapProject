import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand/brand';
import { BrandService } from '../../services/brand/brand.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule],
  providers: [BrandService],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;

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

}
