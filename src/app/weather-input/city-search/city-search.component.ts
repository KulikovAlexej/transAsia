import { Component, OnInit, AfterContentChecked, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
  inputs: ['citiesArray']
})
export class CitySearchComponent implements OnInit {

  @Input()
  disableRipple: boolean = true;
  cityStr: string = '';
  cityArr: Array<Object> = [];
  cityCtrl: FormControl;
  errorVisible: boolean = false;
  currentCityArr: Array<Object> = [];

  @Output()
  citySelected: EventEmitter<Object> = new EventEmitter();

  sendCityObj(obj) {
    this.citySelected.emit(obj)
  }

  constructor() {
    this.cityCtrl = new FormControl();
  }

  sortCity(searchStr: string, fullArray: Array<any>) {

    if (searchStr.length > 2) {
      searchStr = searchStr.toLowerCase(); 
      this.currentCityArr = fullArray.filter((item) => {
        const city = item.name.toLowerCase();
        const country = item.country.toLowerCase();
        const request = city + ", " + country;
        return request.indexOf(searchStr) === 0;
      })
    }
    else {
      this.currentCityArr = [];
    }

  }

  ngOnInit() { }

  ngAfterContentChecked() {
    if (this.cityStr.length > 2 && this.currentCityArr.length === 0) {
      this.errorVisible = true
    }
    else {
      this.errorVisible = false
    }
    // console.log(this.currentCityArr, this.errorVisible)
  }
  
}
