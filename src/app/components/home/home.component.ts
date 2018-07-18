<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
//import {AuthGaurdService} from "../../services/auth-gaurd-service";
=======
import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
>>>>>>> a2ce70d50e38edda311827eae4e98bcd414ca862

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  zipcode: string;
  zip: string;

  constructor(
    private data: DataService,
<<<<<<< HEAD
    private router: Router,
    //private authGaurdService: AuthGaurdService,
  ) {}
=======
    private router: Router
  ) {
  }
>>>>>>> a2ce70d50e38edda311827eae4e98bcd414ca862

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);
    this.zipcode = '';


  }

  searchBtn() {
    this.data.changeZip(this.zipcode);
<<<<<<< HEAD
  }

=======
    if (this.zipcode === '') {
      this.router.navigate(['error-page']);
    }
  }
>>>>>>> a2ce70d50e38edda311827eae4e98bcd414ca862

  onEnter(event) {
    if (event.key === 'Enter') {
      this.searchBtn();
    }
    this.router.navigate(['/list-of-trails']);
  }
}
