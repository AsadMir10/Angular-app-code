import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {
  toyota_sale_cars = ['assets/cars/1. Toyota/1.jpg'
  ,'assets/cars/1. Toyota/2.jpg',
  'assets/cars/1. Toyota/3.jpg',
'assets/cars/1. Toyota/4.jpg',
'assets/cars/1. Toyota/5.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
