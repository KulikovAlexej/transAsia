import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherCardComponent } from './current-weather-card.component';

describe('CurrentWeatherCardComponent', () => {
  let component: CurrentWeatherCardComponent;
  let fixture: ComponentFixture<CurrentWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
