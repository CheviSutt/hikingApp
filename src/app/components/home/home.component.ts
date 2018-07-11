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
    this.data.changeZip(this.zipcode);
    // this.router.navigateByUrl('/list-of-trails'); // Alberto's code for bug
  }
}
