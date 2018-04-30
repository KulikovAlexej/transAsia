import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
// import { CityService } from '../city-service/cities.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
  inputs: ['citiesArray']
})
export class CitySearchComponent implements OnInit {


  cityCtrl: FormControl;


  @Input()
  disableRipple: boolean = true;

  // query: string = './assets/data/city.list.json';
  cityStr: string = '';
  cityArr: Array<Object> = [];
  //ниже инициализировать бы просто классом, типо currentCityArr: City[] 
  currentCityArr: Array<Object> = [
    {
      name: '',
      country: '',
      id: ''
    }
  ];

  @Output()
  citySelected: EventEmitter<Object> = new EventEmitter();

  sendCityObj(obj){
    this.citySelected.emit(obj)
  }
  
  constructor() {
    this.cityCtrl = new FormControl();
  } 

  findCity(str: string, arr: Array<any>) {
    let query = str.toLowerCase();
    let newArr: Array<any> = [];
    if (query.length > 2) {
      console.log(123321);
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

  // getCurrentWeather(cityObj) {
  //   console.log(cityObj.id);

  //   let BASIC_URL = environment.BASIC_URL;
  //   let APP_ID = environment.APP_ID;
  //   let ID = cityObj.id;
  //   let REQUEST = BASIC_URL + ID + APP_ID;
  //   this.cityService.getData(REQUEST).subscribe(
  //     data => console.log(data),
  //     error => console.log(error),
  //     () => console.log('Complete')
  //   )
  // }

  // getForecast(cityObj) {
  //   let BASIC_URL = environment.BASIC_URL_FORECAST;
  //   let APP_ID = environment.APP_ID;
  //   let ID = cityObj.id;
  //   let REQUEST = BASIC_URL + ID + APP_ID;
  //   this.cityService.getData(REQUEST).subscribe(
  //     data => console.log(data),
  //     error => console.log(error),
  //     () => console.log('Complete')
  //   )
  // }

  ngOnInit() {

  }
// надо излучать событие, которое дойдет обратно до app.component
}
