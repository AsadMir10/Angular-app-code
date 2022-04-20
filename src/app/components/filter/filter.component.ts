import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filter_inputs = ['Enter Make','Choose City','Price Range','Type: Car/Bike','Rating']
  cities = ['Islamabad','Multan','Bhawalpur','Karachi','Sarghoda','Lahore']
  prices = ['1lac','2lac','3lac','4lac','5lac','6lac','7lac','8lac','9lac','10lac']
  types = ['Car','Bike'];
  search_logo = ['assets/s1.png'];


  constructor() { }

  ngOnInit(): void {
  }

}
