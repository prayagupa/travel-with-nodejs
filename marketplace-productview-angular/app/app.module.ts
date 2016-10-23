import {NgModule}     from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {CalculatePricePipe}   from './products/calculate-price.pipe'
import {ProductComponent} from "./products/product.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ProductComponent, CalculatePricePipe],
    bootstrap: [ProductComponent]
})

export class AppModule {
}
