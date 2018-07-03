import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { CreateUserService } from "../../services/create-user.service";

export interface Users {
  address: string;
  city: string;
  firstName: string;
  lastName: string;
  state: string;
  zipCode: string;
  email: string;
  password: string;
}

export interface UserId extends Users {
  id: string;
}
@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  user = this.setUser();//equal to returned value of setUser
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  private userCollection: AngularFirestoreCollection<Users>;
  users: Observable<any[]>;

  constructor(private http: HttpClient,
              private createUserService: CreateUserService,
              private db: AngularFirestore) {
    this.userCollection = this.db.collection<Users>('userProfile');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Users;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  ngOnInit() {
  }

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
      zipcode: "",
      email: "",
      password: ""
    }
    return this.user;
  }
    createUser(user: UserId){
      console.log(this.user);
      this.userCollection.add(this.user);
    }

}
