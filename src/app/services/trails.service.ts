import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapsService } from './maps.service';

import * as trailsKey from '../local-api-keys/trails-api-key';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';
import { Trails } from '../domains/trails';

@Injectable()
export class TrailsService {

  constructor(private http: HttpClient,
              private mapsService: MapsService) { }


  //This whole method returns the 10 nearest hiking trails based on zipcode/city input into the search bar
  getTrails(zip: string): Observable<any> {
    return this.mapsService.getLocation(zip).pipe(
      flatMap(locationData => {
        const lat = locationData.results[0].locations[0].latLng.lat;
        const lng = locationData.results[0].locations[0].latLng.lng;
        return this.http.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=10&key=${trailsKey.default}`)
      }),
      map(data => {
        return data;
      })
    )
  }

  getTrail(id: string){
    return this.http.get(`https://www.hikingproject.com/data/get-conditions?ids=${id}&key=${trailsKey.default}`);
  }
}
