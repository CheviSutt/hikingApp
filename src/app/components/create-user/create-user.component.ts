import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {CreateUserService} from "./create-user.service";

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: any;

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(private http: HttpClient,private createUserService: CreateUserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.user = {
      address: "8 Mayfield Hill",
      city: "Long Beach",
      first_name: "Theresa",
      last_name: "Fiddy",
      state: "California",
      zipcode: "90831"
    }
  }
}
