import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather-card',
  templateUrl: './current-weather-card.component.html',
  styleUrls: ['./current-weather-card.component.css'],
  // inputs: ['cityWeather']
})
export class CurrentWeatherCardComponent implements OnInit {
  @Input()
  cityWeather: Object;


  showWeather(){
    console.log(this.cityWeather)
  }
  constructor() { }

  ngOnInit() {
    
  }

}
