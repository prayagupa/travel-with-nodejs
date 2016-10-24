import {NgModule}     from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {ProductComponent} from './products/product.component';
import {ProductDetailComponent}   from './products/product-detail.component'
import {CalculatePricePipe}   from './products/calculate-price.pipe'
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductService} from "./products/product.service";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, DashboardComponent, ProductComponent, ProductDetailComponent, CalculatePricePipe],
    bootstrap: [AppComponent],
    providers : [ProductService]
})

export class AppModule {
}
