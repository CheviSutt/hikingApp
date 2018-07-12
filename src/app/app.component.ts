import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { FormControl, Validators } from "@angular/forms";
import { CreateUserService } from "./services/create-user.service";
import { AuthService } from "./services/auth.service";

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators";
import * as firebase from "firebase";

// 7-11-2018
export interface Users {
  address: string;
  city: string;
  firstName: string;
  lastName: string;
  state: string;
  zipCode: string;
  email: any;
  password: string;
}

export interface UserId extends Users {
  id: string;
}
//--------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  createUser: Observable<any[]>;

  // 7-11-2018
  user = this.setUser();//equal to returned value of setUser
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  private userCollection: AngularFirestoreCollection<Users>;
  users: Observable<any[]>;
  private password: string;
  //--------

  constructor(
    private db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,

    // 7-11-2018
    private http: HttpClient,
    private createUserService: CreateUserService,
    //-------

  ) {
    this.createUser = db.collection('userProfile').valueChanges();
    console.log(this.createUser);
    // 7-11-2018
    this.userCollection = this.db.collection<Users>('userProfile');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Users;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    //------

  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

  // 7-11-2018
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  setUser() {
    this.user = {
      address: "",
      city: "",
      firstName: "",
      lastName: "",
      state: "",
      zipCode: "",
      email: "",
      password: ""
    }
    return this.user;
  }
  //------

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then( authenticated => {
      console.log('authenticed');

      // 7-11-2018
      console.log(this.user);
      this.userCollection.add(this.user);

      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      //-------------

      this.router.navigate(['/home']);
    })
  }
  
  logoutBtn(){
    this.afAuth.auth.signOut();
  }
}
