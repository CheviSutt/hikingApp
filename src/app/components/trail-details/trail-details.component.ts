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
    this.trailService.getTrail(this.route.snapshot.params['id']).subscribe((trail: Trails) => {
      console.log(trail['0']);
      this.activeTrail = trail['0'];
    })
  }
  back() {
    this.router.navigate(['/list-of-trails']);
  }
}

