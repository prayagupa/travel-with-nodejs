import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransitAppComponent }   from './app.component';
import {LoginComponent} from "./login/Login.component";
import {BusComponent, Bus} from "./bus/Bus.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TransitAppComponent, LoginComponent, BusComponent ],
  bootstrap:    [ TransitAppComponent, LoginComponent, BusComponent ]
})
export class TransitAppModule { }

