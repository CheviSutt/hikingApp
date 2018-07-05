import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'write-a-review',
  templateUrl: './write-a-review.component.html',
  styleUrls: ['./write-a-review.component.css']
})
export class WriteAReviewComponent implements OnInit {
  _trailRating: number;
  trailID: string;

  @Input()
  get trailRating() {
    return this._trailRating;
  }

  set trailRating(rating: number) {
      this._trailRating = rating;
      this.ratingArr = [];
      for (let i = 0; i < this.trailRating; i++) {
          this.ratingArr.push(i.toString());
      }
  }

  ratingArr = [];

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.currentTrailID.subscribe(trailID => this.trailID = trailID);
  }
}
