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

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['cityWeather'].currentValue != undefined){
      this.visibleFlag = true;
    }
    else{
      this.visibleFlag = false;
    }
  }

}
