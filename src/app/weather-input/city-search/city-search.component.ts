import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { CityService } from '../city-service/cities.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  query: string = './assets/data/city.list.json';
  cityStr: string = '';
  cityArr: Array<Object> = [];
  currentCityArr: Array<Object> = [];
  constructor(private cityService: CityService) { }


  createArray(data) {
    this.cityArr = data;
  }

  findCity(str: string, arr: Array<any>) {
    let query = str.toLowerCase();
    let newArr: Array<any> = [];
    if (query.length > 2) {
      arr.forEach((object) => {
        //надо приводить все к маленьким буквам, чтобы сравнивать
        let name = object.name.toLowerCase();
        if (name.indexOf(query) == 0) {
          newArr.push({
            name: object.name,
            country: object.country,
            id: object.id
          });
        }
      })
      this.currentCityArr = newArr;
    }
    else{
      this.currentCityArr = [];
    }

  }

  getCurrentWeather(cityObj) {
    console.log(cityObj.id);

    let BASIC_URL = environment.BASIC_URL;
    let APP_ID = environment.APP_ID;
    let ID = cityObj.id;
    let REQUEST = BASIC_URL + ID + APP_ID;
    this.cityService.getData(REQUEST).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('Complete')
    )
  }

  getForecast(cityObj) {
    let BASIC_URL = environment.BASIC_URL_FORECAST;
    let APP_ID = environment.APP_ID;
    let ID = cityObj.id;
    let REQUEST = BASIC_URL + ID + APP_ID;
    this.cityService.getData(REQUEST).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('Complete')
    )
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
