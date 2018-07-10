import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import * as firebase from "firebase/app";
import { AuthService} from "../../services/auth.service";
import {Observable} from "rxjs/Rx";
import {AngularFirestore} from "angularfire2/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createUser: Observable<any[]>;

  constructor(
    db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router

  ) {
    this.createUser = db.collection('userProfile').valueChanges();
    console.log(this.createUser);
  }

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then( () => {
      console.log('authenticed');
      this.router.navigate(['/home']);
    })
  }

  logoutBtn(){
    this.afAuth.auth.signOut();
  }
}
