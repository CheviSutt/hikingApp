import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  createUser: Observable<any[]>;
  public location = '';

  constructor(
    db: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  )
  {
    this.createUser = db.collection('userProfile').valueChanges();
    console.log(this.createUser);
    this.location = router.url;
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
