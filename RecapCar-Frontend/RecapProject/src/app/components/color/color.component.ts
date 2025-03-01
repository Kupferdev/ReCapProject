import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color/color.service';
import { Color } from '../../models/color/color';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers:[ColorService],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {
  colors:Color[] = [];
  dataLoaded = false;

  constructor(private colorService:ColorService) {}

  ngOnInit():void{
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=> {
      this.colors = response.data;
      this.dataLoaded = true;
    })
  }
}
