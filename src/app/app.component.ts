import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { CreateUserService } from "./services/create-user.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators";

export interface User {
  displayName: string;
  email: any;
  photoURL: string;
  uid: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  createUser: Observable<any[]>;
  public location = ''; //Celie's code. Don't delete.
  private userCollection: AngularFirestoreCollection<User>;
  users: Observable<any[]>;


  constructor(
    private db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient,
    private createUserService: CreateUserService,
  ) {

    //Celie's code. Don't delete:
    this.location = router.url;
    this.router.events.subscribe(route => {
      if(route instanceof NavigationEnd) {
          route.url = '/';
      }
    });
    //------------------

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
    }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then( authenticated => {
      console.log(authenticated);

      if (authenticated.additionalUserInfo.isNewUser) {
        const newUser: User = {
          displayName:authenticated.user.displayName,
          email:authenticated.user.email,
          photoURL:authenticated.user.photoURL,
          uid:authenticated.user.uid
        };
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
