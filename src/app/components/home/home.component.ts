import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: any;
  zipcode: string;
  zip: string;

  constructor(public afAuth: AngularFireAuth,
              private data: DataService
  ) {}

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);
  }

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  searchBtn() {
    this.data.changeZip(this.zipcode);
  }
}
