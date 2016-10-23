/**
 * Created by prayagupd
 * on 10/23/16.
 */

import {Component, Input, OnInit} from '@angular/core'

import { Product } from './Product'
import {ProductService} from "./product.service";

@Component({
    selector: 'ProductView',
    templateUrl: './app/products/product.component.html',
    styleUrls :  ['./app/products/products.css'],
    providers: [ProductService]
})

export class ProductComponent implements OnInit {

    title = "Marketplace";
    selectedProduct: Product;
    products: Product[];

    constructor(private productService: ProductService) {
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    getProducts(): void {
        this.productService.getProducts()
            .then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }
}

