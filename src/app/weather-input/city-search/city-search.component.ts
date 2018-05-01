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
  currentCityArr: Array<Object> = [
    {
      name: '',
      country: '',
      id: ''
    }
  ];

  @Output()
  citySelected: EventEmitter<Object> = new EventEmitter();

  // @Output()
  // optionSelected: EventEmitter<MatAutocompleteSelectedEvent> = new EventEmitter();
  sendCityObj(obj){
    this.citySelected.emit(obj)
  }

  test(){
    console.log('keypress')
  }
  
  constructor() {
    this.cityCtrl = new FormControl();
  } 

  findCity(str: string, arr: Array<any>) {
    let query = str.toLowerCase();
    let newArr: Array<any> = [];
    if (query.length > 2) {
      arr.forEach((object) => {
        //надо приводить все к маленьким буквам, чтобы сравнивать
        // console.log('ЗАшел - значит больще 2 букв');
        let name = object.name.toLowerCase();
        let country = object.country.toUpperCase();
        let readyString = name;
        if (readyString.indexOf(query) == 0) {
          newArr.push({
            name: object.name,
            country: object.country,
            id: object.id
          });
        }
        // else if (readyString.indexOf(query) == -1){
        //   console.log('ne sovpalo')
        // }
      })
      this.currentCityArr = newArr;
    }
    else{
      this.currentCityArr = [];
    }
    
  }

  sortCity(number){
    console.log(this.cityStr.toLowerCase() + " - " + number)
  }

  ngOnInit() {

  }

  ngAfterContentChecked(){
     if( this.cityStr.length > 2 && this.currentCityArr.length < 2){
       this.errorVisible = true
     }
     else{
       this.errorVisible = false
     }
  }
}
