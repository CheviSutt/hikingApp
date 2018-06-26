import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as trailsKey from '../local-api-keys/trails-api-key';

@Injectable()
export class TrailsService {

  constructor(private http: HttpClient) { }

  getTrails() : Observable<any> {
    return this.http.get(`https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=${trailsKey}`);
  }
}
