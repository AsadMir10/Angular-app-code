import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html',
  styleUrls: ['./category4.component.css']
})
export class Category4Component implements OnInit {
  bike_sale_names = ['Bajaj Pulsar NS200'
  ,'Bajaj Dominar 400'
  ,'Bajaj CT 100' 
  ,'Bajaj Chetak'
  ,'Bajaj Pulsar 180'];
bike_sale_images = ['assets/bikes/1. Bajaj/bike1.jpg','assets/bikes/1. Bajaj/bike2.jpg'
,'assets/bikes/1. Bajaj/bike3.jpg','assets/bikes/1. Bajaj/bike4.JPG','assets/bikes/1. Bajaj/bike5.JPG'];
bike_sale_models = ['2019','2018','2017','2016','2015'];
bike_sale_prices = ['1,36,000'
  ,'2,17,000'
  ,'51,802'
  ,'1,50,000'
  ,'1,16,000'];
bike_sale_locations = ['Lahore' 
  ,'Islamabad', 
  'Rawalpindi' 
  ,'Sargodha' 
  ,'Islamabad'];
bike_sale_dates = ['21 March, 2017',
    '25 May, 2019',
    '13 August, 2015',
    '6 December, 2020',
    '10 June, 2021'];
bike_sale_ratings = ['2.3',
  '3.1',
  '2.6',
  '4.2',
  '3.9'];

  constructor() { }

  ngOnInit(): void {
  }

}
