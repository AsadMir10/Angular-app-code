import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category5',
  templateUrl: './category5.component.html',
  styleUrls: ['./category5.component.css']
})
export class Category5Component implements OnInit {
  all_other_bike_sale_images = ['assets/bikes/2. Hero/bike6.jpeg','assets/bikes/2. Hero/bike7.jpg',
  'assets/bikes/2. Hero/bike8.jpg','assets/bikes/3. Yamaha/bike11.jpg',
  'assets/bikes/3. Yamaha/bike12.jpg',
  'assets/bikes/3. Yamaha/bike13.jpg'];
  all_other_bike_sale_names = ['Hero splendor plus',
   'Hero HF Deluxe'
    ,'Hero Passion Pro'
    ,'Yamaha MT-15 Version 2.0',
    'Yamaha YZF r15 v3',
    'Yamaha FZS-fi v3'];
  all_other_bike_sale_models = ['2019','2018','2017','2016','2015','2014'];
  all_other_bike_sale_prices = ['70,700',
    '64,520',
    '79,600',
    '1,59,000',
    '1,57,000',
    '1,20,000'];
  all_other_bike_sale_locations = ['Rawalpindi', 
    'Bahawalpur', 
    'Islamabad'
    ,'Islamabad' 
    ,'Lahore' 
    ,'Karachi'];
  all_other_bike_sale_ratings = ['2.9',
    '3.6',
    '4.4',
    '4.4',
    '4.5',
    '3.1'];
  all_other_bike_sale_dates = ['21 March, 2017',
  '25 May, 2019',
  '13 August, 2015',
  '6 December, 2020',
  '10 June, 2021',
  '12 December, 2018'];

  constructor() { }

  ngOnInit(): void {
  }

}
