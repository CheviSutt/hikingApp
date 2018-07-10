import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { DataService } from '../../services/data.service';
import * as firebase from "firebase/app";

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
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);
  }

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logoutBtn(){
    this.afAuth.auth.signOut();
  }

  searchBtn() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      } else {
        this.data.changeZip(this.zipcode);
      }
    });
  }
}
