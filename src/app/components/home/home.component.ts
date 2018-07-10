import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase/app';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: any;
  zipcode: string;
  zip: string;

  constructor(
    public afAuth: AngularFireAuth,
    private data: DataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);
    this.zipcode = '';
  }

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logoutBtn() {
    this.afAuth.auth.signOut();
  }

  searchBtn() {
<<<<<<< HEAD
      this.data.changeZip(this.zipcode);
      // this.router.navigateByUrl('/list-of-trails'); // Alberto's code for bug
    }
}


    firebase.auth().onAuthStateChanged(function(user) {
      this.data.changeZip(this.zipcode);
 };


=======
    this.data.changeZip(this.zipcode);
    // this.router.navigateByUrl('/list-of-trails'); // Alberto's code for bug
  }
}
>>>>>>> 22be1be9cc9b4d4fa11f145f8d5c9d2ddb8918a6
