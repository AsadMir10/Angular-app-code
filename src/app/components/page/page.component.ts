import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit
{
  page = {
    title:'Welcome to my website this is a car buy and sell Website',
    content:'MyWheels',
    image:'assets/car1.jpg',
  };
  startlogo={
    content:'Find Used Cars and Bikes all over pakistan',
    logo:'assets/logo.jpg',
  };
  category = {
    title:'Categories',
    content:'Browse our categories',
  };
  cars = ['Honda','Toyota','Lexus'];
  bikes = ['Bajaj','Hero','Yamaha'];

  logos = ['assets/hondalogo.png','assets/toyotalogo.png','assets/lexuslogo.jpg','assets/bajajlogo.png','assets/herologo.png','assets/yamahalogo.png'];

  toyota_sale_cars = ['assets/cars/1. Toyota/1.jpg'
  ,'assets/cars/1. Toyota/2.jpg',
  'assets/cars/1. Toyota/3.jpg',
'assets/cars/1. Toyota/4.jpg',
'assets/cars/1. Toyota/5.jpg'];

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

  constructor()
  {}

  ngOnInit(): void {
      
  }
}


