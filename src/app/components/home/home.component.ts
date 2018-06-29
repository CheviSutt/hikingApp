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

<<<<<<< HEAD
  searchBtn(): any {
    this.trailservice.getTrails(this.zipcode).subscribe(data => {
      console.log(data);
      return data;
    })
  }
=======
  // searchBtn(): string {
  //   this.trailservice.getTrails(this.zipcode).subscribe(data => {
  //     console.log(data);
  //     return data;
  //   })
  // }
>>>>>>> 553270bc88c41011ea1a1bcf63b73c97eefed6d5
}
