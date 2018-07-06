import { Trails } from './../../domains/trails';
import { Component, OnInit } from '@angular/core';
import { TrailsService } from '../../services/trails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { DataService } from '../../services/data.service';
import { MatDialog } from '@angular/material';
import { PhotoUploadComponent } from '../photo-upload/photo-upload.component';

@Component({
  selector: 'trail-details',
  templateUrl: './trail-details.component.html',
  styleUrls: ['./trail-details.component.css']
})
export class TrailDetailsComponent implements OnInit {
  activeTrail: Trails;
  trailWeather: any;
  trailID: string;
  photo: any;

  constructor(
    private trailService: TrailsService,
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService,
    private data: DataService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.data.currentTrailID.subscribe(trailID => this.trailID = trailID);
    const zip = this.route.snapshot.params['zip'];
    const id = this.route.snapshot.params['id'];
    this.trailService.getTrails(zip).subscribe(result => {
      const trails = result.trails;
      trails.forEach(trail => {
        if (trail.id == id) {
          this.activeTrail = trail;
        }
      });
      if (this.activeTrail) {
        this.weatherService.getWeather(this.activeTrail.latitude.toString(), this.activeTrail.longitude.toString())
          .subscribe(result => {
            this.trailWeather = result;
            console.log(result);
          });
      }
    });
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.params.id);
  }

  back() {
    this.router.navigate(['/list-of-trails']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PhotoUploadComponent, {
      width: '500px',
      data: {photo: this.photo}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.photo = result;
    });
    console.log(this.trailID);
  }

  rateTrail() {
    this.router.navigate(['write-a-review']);
  }
}
