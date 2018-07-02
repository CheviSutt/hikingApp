import { Trails } from './../../domains/trails';
import { Component, OnInit } from '@angular/core';
import { TrailsService } from '../../services/trails.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'trail-details',
  templateUrl: './trail-details.component.html',
  styleUrls: ['./trail-details.component.css']
})
export class TrailDetailsComponent implements OnInit {
  activeTrail: Trails;
  allTrails: Trails[];

  constructor(
    private trailService: TrailsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const zip = this.route.snapshot.params['zip'];
    const id = this.route.snapshot.params['id'];
    this.trailService.getTrails(zip).subscribe(result => {
      const trails = result.trails;
      trails.forEach(trail => {
        if(trail.id == id){
          this.activeTrail = trail;
        }
      })
    });

    console.log(this.route.snapshot);
  }
  back() {
    this.router.navigate(['/list-of-trails']);
  }
}

