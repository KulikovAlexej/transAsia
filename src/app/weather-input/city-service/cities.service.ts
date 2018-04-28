// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import {Observable} from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class CityService {

    constructor(private _http: Http) {

    }

    // getData() {
    //     return this._http.get('/assets/data/cities.json')
    //         .map(res => res.json());
    // }
    getData(query): Observable<any> {
        return this._http.get(query)
            .map((response: Response) => {
                console.log(response.json());
                return response.json();
            }
        )
    }

}