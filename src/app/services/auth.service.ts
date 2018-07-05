import {Injectable} from "angular2/core";
import { AngularFirestore, AngularFirestoreCollection, } from "angularfire2/firestore";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";


@Injectable()
export class AuthService {
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(private db: AngularFirestore, private fbAuth: AngularFireAuth){

  }

  // signIn(){
  //   this.fbAuth.auth.signInWithPopup(this.provider)
  //     .then(results => {
  //       console.log(results);
  //     })
  // }
  //
  // signOut(){
  //   this.fbAuth.auth.signOut();
  // }
  //
  // getUser() {
  //   console.log(firebase.auth().currentUser);
  // }

}
