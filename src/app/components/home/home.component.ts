import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';


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


  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {

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
