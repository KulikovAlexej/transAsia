import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityService } from './cities.service';
import { CitySearchComponent } from '../city-search/city-search.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CitySearchComponent],
    providers: [CityService]
})
export class CitiesServiceModule{

}