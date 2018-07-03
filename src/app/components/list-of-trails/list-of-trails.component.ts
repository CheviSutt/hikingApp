import { Component, OnInit } from '@angular/core';
import { Trails } from '../../domains/trails';
import { TrailsService } from '../../services/trails.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'list-of-trails',
  templateUrl: './list-of-trails.component.html',
  styleUrls: ['./list-of-trails.component.css']
})

export class ListOfTrailsComponent implements OnInit {
  trails: Trails[];
  zip: string;

  constructor(
    private trailsService: TrailsService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);

    this.trailsService.getTrails(this.zip).subscribe(result => {
      this.trails = result.trails;
      console.log(this.trails);
    });
  }
}