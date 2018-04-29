import { Component } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  jsonAddres: string = environment.JSON_ADRESS;
  currentWeather: Object;
  currentForecast: Object;
  cityArr: Array<Object> = [];
  selectedCity = {
    name: '',
    country: '',
    id: ''
  }
  constructor(private _dataService: DataService) {

  }

  createArray(data) {
    this.cityArr = data;
    // надо передать этот массив в дочерний компонент citySearch, чтобы там уже формировался живой поиск
  }

  takeSelectedCity(city) {
    // console.log(city);
    this.selectedCity = city;
    this.getCurrentWeather(this.selectedCity);
    this.getForecast(this.selectedCity);
  }

  getCurrentWeather(cityObj) {

    // console.log(cityObj.id);
    let BASIC_URL = environment.BASIC_URL;
    let APP_ID = environment.APP_ID;
    let ID = cityObj.id;
    let REQUEST = BASIC_URL + ID + APP_ID;
    this._dataService.getData(REQUEST).subscribe(
      data => this.currentWeather = data,
      error => console.log(error),
      // () => console.log('Complete')
    )
  }

  getForecast(cityObj) {
    let BASIC_URL = environment.BASIC_URL_FORECAST;
    let APP_ID = environment.APP_ID;
    let ID = cityObj.id;
    let REQUEST = BASIC_URL + ID + APP_ID;
    this._dataService.getData(REQUEST).subscribe(
      data => console.log(data),
      error => console.log(error),
      // () => console.log('Complete')
    )
  }

  ngOnInit() {
    this._dataService.getData(this.jsonAddres).subscribe(
      data => this.createArray(data),
      error => console.log(error),
      () => console.log('Complete')
    )
  }
}
/// Кинуть сюда все данные от сервиса
