import { Component } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  createUser: Observable<any[]>;

  constructor(
    db: AngularFirestore,
  ) {
    this.createUser = db.collection('userProfile').valueChanges();
    console.log(this.createUser);
  }
}
