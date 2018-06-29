import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { TrailsService } from './services/trails.service';
import { WeatherService } from './services/weather.service';
import { MapsService } from './services/maps.service';
import { CreateUserService } from "./services/create-user.service";
import { DataService } from './services/data.service';

import { environments } from '../environments/environments';

import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListOfTrailsComponent } from './components/list-of-trails/list-of-trails.component';
import { TrailDetailsComponent } from './components/trail-details/trail-details.component';
import { WriteAReviewComponent } from './components/write-a-review/write-a-review.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateUserComponent,
    ListOfTrailsComponent,
    TrailDetailsComponent,
    WriteAReviewComponent,
    PhotoUploadComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environments.firebase, 'hikingapp-76e2e'),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "create-user", component: CreateUserComponent },
      { path: "list-of-trails", component: ListOfTrailsComponent },
      { path: "photo-upload", component: PhotoUploadComponent },
      { path: "trail-details", component: TrailDetailsComponent },
      { path: "write-a-review", component: WriteAReviewComponent }
    ])
  ],
  providers: [
    TrailsService,
    WeatherService,
    MapsService,
    CreateUserService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
