import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { ProductDetailComponent }   from './product-detail/product-detail.component';
//import { ProductFormComponent } from './product-form.component'
import { CalculatePricePipe }   from './calculate-price.pipe';
import { ProductsComponent }       from './product/products.component';
import { ProductService }       from './product.service';
import { RouterModule }         from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';

import { ProductSearchComponent }       from './search/product-search.component'


@NgModule({
    imports:    [ BrowserModule, FormsModule, AppRoutingModule, HttpModule
    , InMemoryWebApiModule.forRoot(InMemoryDataService)
 ],
    declarations:   [ AppComponent, DashboardComponent, ProductDetailComponent, CalculatePricePipe
    , ProductsComponent, ProductSearchComponent ],
    bootstrap:      [ AppComponent ],
    providers: [ ProductService ],
    
})

export class AppModule {}
