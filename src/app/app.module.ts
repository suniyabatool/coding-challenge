import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

import { AppRouting } from './app.routing';
import { RouterModule } from '@angular/router';


import {IsvalidPipe} from './shared/pipes/isvalid.pipe';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    ProfilePictureComponent,
    IsvalidPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    RouterModule,
    AngularMultiSelectModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProfilePictureComponent]
})
export class AppModule { }
