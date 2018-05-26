import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import {AdminModule} from './admin/admin.module';

import { AppComponent } from './app.component';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    AngularSvgIconModule,

    //Custom Modules
    AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
