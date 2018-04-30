import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather-card',
  templateUrl: './current-weather-card.component.html',
  styleUrls: ['./current-weather-card.component.css'],
})
export class CurrentWeatherCardComponent implements OnInit, OnChanges {
  @Input()
  cityWeather: Object;

  panelOpenState: boolean = false;
  visibleFlag: boolean = false;


  


  showWeather(){
    console.log(this.cityWeather)
  }
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes['cityWeather'].currentValue);
    if(changes['cityWeather'].currentValue != undefined){
      this.visibleFlag = true;
    }
    else{
      this.visibleFlag = false;
    }
    
    // console.log(this.visibleFlag)
  }

}
