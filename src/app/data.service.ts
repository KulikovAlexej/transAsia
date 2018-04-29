import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()

export class DataService {

    constructor(private _http: Http) {

    }

    getData(query): Observable<any> {
        return this._http.get(query)
            .map((response: Response) => {
                // console.log(response.json());
                return response.json();
            }
        )
    }
}