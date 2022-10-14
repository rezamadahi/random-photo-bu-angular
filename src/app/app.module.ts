import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoShowComponent } from './photo-show/photo-show.component';
import {HttpClientModule} from "@angular/common/http";
import {NgHttpLoaderModule} from "ng-http-loader";

@NgModule({
  declarations: [
    AppComponent,
    PhotoShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
