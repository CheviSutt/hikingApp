import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as trailsKey from '../local-api-keys/trails-api-key';

@Injectable()
export class TrailsService {

  constructor(private http: HttpClient) { }

  getTrails(latitude: any, longitude: any) : Observable<any> {
    return this.http.get(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=10&key=${trailsKey}`);
  }
}
