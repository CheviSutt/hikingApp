import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapsService } from './maps.service';

import * as weatherKey from '../local-api-keys/weather-api-key';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient,
              private mapsService: MapsService
              ) { }

  getWeather(zip: string): Observable<any> {
    return this.mapsService.getLocation(zip).pipe(
      flatMap(locationData => {
        const lat = locationData.results[0].locations[0].latLng.lat;
        const lng = locationData.results[0].locations[0].latLng.lng;
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${weatherKey.default}`)
      }),
      map(data => {
        return data;
      })
    )
  }
}
