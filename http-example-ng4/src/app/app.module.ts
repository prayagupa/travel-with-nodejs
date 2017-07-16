import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import { AppComponent } from './app.component';
import {ArtistService} from "./artist/ArtistService";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

  constructor(private service: ArtistService) {

  }

  ngOnInit(): void {
    console.log(this.service.getMusics())
  }
}
