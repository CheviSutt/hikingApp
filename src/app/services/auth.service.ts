import {Injectable} from "angular2/core";
import { AngularFirestore, AngularFirestoreCollection, } from "angularfire2/firestore";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import {FirebaseListObservable} from "angularfire2/database-deprecated";

// Data storage below
export class Auth {
  body: string;
}

@Injectable()
export class AuthService {
  auths: FirebaseListObservable<Auth[]> = null; // Data storage
  userId: string;

  provider = new firebase.auth.GoogleAuthProvider();
  constructor(private db: AngularFirestore, private fbAuth: AngularFireAuth){

    // Data storage below
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  // Data storage below
  getAuthsList(): FirebaseListObservable<Auth[]> {
    if (!this.userId) return;
    this.auths = this.db.list(`auths/${this.userId}`);
    return this.auths;
  }

  // Data storage below
  createAuth(auth: Auth) {
    this.auths.push(auth)
  }

  signIn(){
    this.fbAuth.auth.signInWithPopup(this.provider)
      .then(results => {
        console.log(results);
      })
  }

  signOut(){
    this.fbAuth.auth.signOut();
  }

  getUser() {
    console.log(firebase.auth().currentUser);
  }

}
