import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
// import { TrailsService } from '../../services/trails.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: any;
  zipcode: string;
  zip: string;

  constructor(
    public afAuth: AngularFireAuth,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);
    this.zipcode = '';
  }

  searchBtn() {
      this.data.changeZip(this.zipcode);
  }

  onEnter(event) {
    if (event.key === "Enter") {
      this.searchBtn();
    }
    this.router.navigate(['/list-of-trails']);
  }
}
