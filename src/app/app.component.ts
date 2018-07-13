import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { FormControl, Validators } from "@angular/forms";
import { CreateUserService } from "./services/create-user.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators";
import * as firebase from "firebase";

// 7-11-2018
export interface User {
  displayName: string;
  email: any;
  photoURL: string;
  uid: string;
}

export interface UserId extends User {
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

  private userCollection: AngularFirestoreCollection<User>;
  users: Observable<any[]>;


  constructor(
    private db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,

    // 7-11-2018
    private http: HttpClient,
    private createUserService: CreateUserService,
    // 7-12-18
  ) {
    this.createUser = db.collection('userProfile').valueChanges();
    console.log(this.createUser);
    // 7-11-2018
    this.userCollection = this.db.collection<User>('userProfile');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    //------

  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }


  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then( authenticated => {
      console.log(authenticated);

      //7-12-18
      if (authenticated.additionalUserInfo.isNewUser) {
        const newUser: User = {
          displayName:authenticated.user.displayName,
          email:authenticated.user.email,
          photoURL:authenticated.user.photoURL,
          uid:authenticated.user.uid
        }
        console.log('saving user');
        this.createUserService.saveUser(newUser);
      }

      this.router.navigate(['/home']);
    })
  }
  logoutBtn(){
    this.afAuth.auth.signOut();
  }
}
