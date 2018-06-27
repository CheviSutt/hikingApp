import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { TrailsService } from "../../services/trails.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  btnText2: string = 'Login';
  btnText3: string = 'Search';
  user: any;
  zipcode: string;


  constructor(public afAuth: AngularFireAuth,
              private trailservice: TrailsService) { }

  ngOnInit() {

  }

  signupBtn() {
    this.user = {
      address: "8 Mayfield Hill",
      city: "Long Beach",
      first_name: "Theresa",
      last_name: "Fiddy",
      state: "California",
      zipcode: "90831"
    }
  }

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  searchBtn() {
    this.trailservice.getTrails(this.zipcode).subscribe(data =>{
      console.log(data);
    })
  }
}
