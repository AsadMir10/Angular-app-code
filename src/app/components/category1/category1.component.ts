import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {
  honda_sale_car_names = ['Honda Civic Si','Honda Accord 2.0T Sport',
'Honda S2000','Honda Prelude','Honda Integra Type R'];
honda_sale_car_images = ['assets/cars/2. Honda/1.jpeg','assets/cars/2. Honda/2.jpeg',
'assets/cars/2. Honda/3.jpg','assets/cars/2. Honda/4.jpg','assets/cars/2. Honda/5.jpg'];
honda_sale_car_models = ['2012','2018','2000','1999','1996'];
honda_sale_car_prices = ['8,903,458','9,328,000', '10,000,000','5,623,780','3,849,270'];
honda_sale_car_locations = ['Lahore','Islamabad','Bahawalpur','Sargodha','Multan'];
honda_sale_car_dates = ['18 April, 2017'
  ,'9 July, 2020'
  ,'15 May, 2021'
  ,'29 October, 2016'
  ,'29 March, 2016'];
honda_sale_car_ratings = ['4.9',
  ,'5.0'
  ,'3.8'
  ,'2.7'
  ,'3.6'];

  constructor() { }

  ngOnInit(): void {
  }

}
