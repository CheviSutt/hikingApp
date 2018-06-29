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
  user: any;
  zipcode: string;

  constructor(public afAuth: AngularFireAuth,
              private trailservice: TrailsService) { }

  ngOnInit() {

  }

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  searchBtn(): any {
    this.trailservice.getTrails(this.zipcode).subscribe(data => {
      console.log(data);
      return data;
    })
  }

}
