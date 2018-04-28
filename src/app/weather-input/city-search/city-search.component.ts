import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { CityService } from '../city-service/cities.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  // query: string = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cb30165fbee1109708d696ef9dfffd36"
  // query: string = './assets/data/cities.json';
  query: string = './assets/data/city.list.json';
  city: string = '';
  cityArr: Array<Object> = [];
  constructor( private cityService: CityService) { }


  createArray(data){
    this.cityArr = data;
  }

  findCity(str: string, arr: Array<any>){
    let query = str;
    let newArr: Array<any> = [];
    console.log(query.length);
    arr.forEach((object) => {
      let name = object.name;
      if(name.indexOf(query) == 0){
        newArr.push({
          cityName: object.name,
          country: object.country,
          id: object.id 
        });
      }
    })
    console.log(newArr);
  }

  ngOnInit() {
    this.cityService.getData(this.query).subscribe(
      data => this.createArray(data),
      error => console.log(error),
      () => console.log('Complete')
    )
    // this.findCity('La', this.cityArr);
  }
    
}
