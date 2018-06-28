import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserService {

  userURL = 'https://hikingapp-76e2e.firebaseio.com'

    constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.userURL);
  }
}
