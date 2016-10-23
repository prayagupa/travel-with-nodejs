import {NgModule}     from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {ProductComponent} from "./products/product.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ProductComponent],
    bootstrap: [ProductComponent]
})

export class AppModule {
}
