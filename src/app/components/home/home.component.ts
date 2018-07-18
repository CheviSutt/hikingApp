<<<<<<< HEAD

=======
>>>>>>> 4fcdfe20cd9a9a8ec99ce448d7e84a5406ae7027
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";

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
  ) {}

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);
    this.zipcode = '';
  }

  searchBtn() {
    this.data.changeZip(this.zipcode);
  }

  onEnter(event) {
    if (event.key === "Enter") {
      this.searchBtn();
    }
    this.router.navigate(['/list-of-trails']);
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> 4fcdfe20cd9a9a8ec99ce448d7e84a5406ae7027
