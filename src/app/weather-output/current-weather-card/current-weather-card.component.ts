import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather-card',
  templateUrl: './current-weather-card.component.html',
  styleUrls: ['./current-weather-card.component.css'],
  // inputs: ['cityWeather']
})
export class CurrentWeatherCardComponent implements OnInit, OnChanges {
  @Input()
  cityWeather: Object;

  visibleCard: boolean = false;

  


  showWeather(){
    console.log(this.cityWeather)
  }
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.visibleCard)
  }

  ngOnChanges(changes: SimpleChanges) {
    function detectedEmptyInput( inputName ){
      if( changes[inputName].currentValue != undefined ) {
        // this.visibleCard = true;
      }
      else{
        // console.log(this.visibleCard, 123)
        // this.visibleCard = false;
      }
      console.log(changes[inputName].currentValue)
    }
    // detectedEmptyInput('cityWeather');
    console.log('ngChanges');
    
    
  }

}
