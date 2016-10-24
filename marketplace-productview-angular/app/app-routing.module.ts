/**
 * Created by prayagupd
 * on 10/24/16.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductDetailComponent} from "./products/product-detail.component";
import {ProductComponent} from "./products/product.component";


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: ProductDetailComponent },
    { path: 'products',     component: ProductComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

