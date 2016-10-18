import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransitAppComponent }   from './app.component';
import {LoginComponent} from "./login/login.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TransitAppComponent, LoginComponent ],
  bootstrap:    [ TransitAppComponent, LoginComponent ]
})
export class TransitAppModule { }

