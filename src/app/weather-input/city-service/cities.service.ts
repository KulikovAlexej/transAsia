import { Injectable } from '@angular/core';

@Injectable()

export class CityService {
    getData() {
        let cities: Array<string> = [];
        for(let i = 0; i++; i < 15){
            cities.push(`Moscow ${i}`)
        }
        return cities;
    }
}