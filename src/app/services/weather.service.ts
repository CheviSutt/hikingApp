import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as weatherKey from '../local-api-keys/weather-api-key';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(latitude: number, longitude: number): Observable<any> {
    return this.http.get(`https://api.darksky.net/forecast/${weatherKey.default}/${latitude},${longitude}`);
  }
}
