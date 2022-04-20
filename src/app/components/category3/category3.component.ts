import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category3',
  templateUrl: './category3.component.html',
  styleUrls: ['./category3.component.css']
})
export class Category3Component implements OnInit {
  lexus_sale_car_names = ['Lexus LX 470'
    ,'Lexus IS F'
    ,'Lexus GX 460'
    ,'Lexus LS 400'
    ,'Lexus RC F'];
  lexus_sale_car_images = ['assets/cars/3. Lexus/1.jpg','assets/cars/3. Lexus/2.jpg',
  'assets/cars/3. Lexus/3.jpg','assets/cars/3. Lexus/4.jpg','assets/cars/3. Lexus/5.jfif'];
  lexus_sale_car_models = ['2001','2008','2013','1998','2015'];
  lexus_sale_car_prices = ['8,234,861'
    ,'9,273,832'
    ,'10,347,125'
    ,'5,123,434'
    ,'9,900,000'];
  lexus_sale_car_locations = ['Islamabad'
    ,'Islamabad'
    ,'Lahore'
    ,'Bahawalpur'
    ,'Kashmir'];
  lexus_sale_car_dates = ['23 March, 2019'
    ,'11 November, 2021'
    ,'9 April, 2020'
    ,'31 December, 2021'
    ,'20 April, 2020'];
  lexus_sale_car_ratings = ['4.8'
    ,'4.2'
    ,'3.8'
    ,'2.9'
    ,'5.0'];


  constructor() { }

  ngOnInit(): void {
  }

}
