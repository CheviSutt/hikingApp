import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';
import {TrailsService} from "../../services/trails.service";
import {Trails} from "../../domains/trails";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  btnText: string = 'Signup';
  btnText2: string = 'Login';
  btnText3: string = 'Search';
  user: any;
  trails: Trails[];


  constructor(public afAuth: AngularFireAuth,
              private trailservice: TrailsService) { }

  ngOnInit() {
      this.trailservice.getTrails().subscribe(trails => {
        this.trails = trails;
      })
  }

  signupBtn(){
    this.user = {
      address: "8 Mayfield Hill",
      city: "Long Beach",
      first_name: "Theresa",
      last_name: "Fiddy",
      state: "California",
      zipcode: "90831"
    }
  }

  loginBtn(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

  searchBtn(){

  }
}
