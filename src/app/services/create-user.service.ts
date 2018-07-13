import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/index";
import * as firebase from "firebase";
import {AngularFirestore} from "angularfire2/firestore";
import {User} from "../app.component";

@Injectable()

//export interface Item { content: string; }// 7-12-18

export class CreateUserService {

    constructor(
      private http: HttpClient,
      private  afs: AngularFirestore
    ) { }

  getUsers(): Observable<any> {
    return this.afs.collection('userProfile').valueChanges();
  }

  saveUser(user:User) {
    console.log(user);
    this.afs.collection('userProfile').add(user);
  }

  getCurrentUser(){
    console.log(firebase.auth().currentUser);
  }

}
