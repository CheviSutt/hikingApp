import { Injectable } from "angular2/core";
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import { FirebaseListObservable } from "angularfire2/database-deprecated";

export class Auth {}


@Injectable()
export class AuthService {
  auths: FirebaseListObservable<Auth[]> = null; // Data storage
  userId: string;

  provider = new firebase.auth.GoogleAuthProvider();
  constructor(
    private db: AngularFirestore,
    private fbAuth: AngularFireAuth){

  }
}
