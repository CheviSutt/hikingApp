import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class CreateUserService {

    constructor(private http: HttpClient) { }

}
