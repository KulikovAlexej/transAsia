import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { CitiesServiceModule } from './weather-input/city-service/cities-service.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { CityService } from './weather-input/city-service/cities.service';
import { DataService } from './data.service';
import { CitySearchComponent } from './weather-input/city-search/city-search.component';
import { CurrentWeatherCardComponent } from './weather-output/current-weather-card/current-weather-card.component';
import { ForecastWeatherComponent } from './weather-output/forecast-weather/forecast-weather.component';
import { LastCitiesListComponent } from './weather-output/last-cities-list/last-cities-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    CurrentWeatherCardComponent,
    ForecastWeatherComponent,
    LastCitiesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
