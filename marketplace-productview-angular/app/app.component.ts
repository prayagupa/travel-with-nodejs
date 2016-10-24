import {Component}        from '@angular/core';
import {Product}  from './products/Product'
import {ProductService}   from './products/product.service'
import {OnInit}         from '@angular/core'


@Component({
    selector: 'ProductView',
    templateUrl: './app/products/product.component.html',
    styleUrls : ['./app/products/products.css'],
    providers: [ProductService]
})

export class AppComponent implements OnInit {
    title = "Marketplace";
    selectedProduct: Product;
    products: Product[];

    constructor(private productService: ProductService) {
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }
}