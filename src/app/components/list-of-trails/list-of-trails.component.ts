import { Component, OnInit } from '@angular/core';
import { Trails } from '../../domains/trails';
import { TrailsService } from '../../services/trails.service';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'list-of-trails',
  templateUrl: './list-of-trails.component.html',
  styleUrls: ['./list-of-trails.component.css']
})
export class ListOfTrailsComponent implements OnInit {
  trails: Trails[];
  input: string = this.homeComponent.searchBtn();

  constructor(
    private trailsService: TrailsService,
    public homeComponent: HomeComponent
  ) { }

  ngOnInit() {
    this.trailsService.getTrails(this.input).subscribe(result => {
      console.log(result.trails);
      this.trails = result.trails;
    });
  }
}
