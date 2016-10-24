/**
 * Created by prayagupd
 * on 10/24/16.
 */

import {Component}        from '@angular/core'
import {OnInit}           from '@angular/core'
import {Router}           from '@angular/router'
import {ProductService} from "../products/product.service";
import {Product} from "../products/Product";

@Component({
    moduleId: module.id,
    selector: 'DashboardView',
    templateUrl: '../app/dashboard/dashboard.component.html',
    styleUrls: ['../app/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    products: Product[] = [];

    constructor(private productService: ProductService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.productService.getProducts().then(products => this.products = products.slice(1, 5));
    }

    gotoDetail(product: Product): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }

}

