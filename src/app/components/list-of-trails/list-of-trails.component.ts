import { Component, OnInit } from '@angular/core';
import { Trails } from '../../domains/trails';
import { Weather } from '../../domains/weather';
import { TrailsService } from '../../services/trails.service';
import { DataService } from '../../services/data.service';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-of-trails',
  templateUrl: './list-of-trails.component.html',
  styleUrls: ['./list-of-trails.component.css']
})

export class ListOfTrailsComponent implements OnInit {
  trails: Trails[];
  zip: string;
  weather: Weather;

  constructor(
    private trailsService: TrailsService,
    private data: DataService,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);

    this.trailsService.getTrails(this.zip).subscribe(result => {
      this.trails = result.trails;
    });

    this.weatherService.getWeather(this.zip).subscribe(result => {
      this.weather = result.weather;
      // console.log(this.weather);
    });
  }
}
