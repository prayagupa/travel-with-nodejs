import {Component}        from '@angular/core';
import {Product}  from './Product'
import {ProductService}   from './product.service'
import {OnInit}         from '@angular/core'
import {Router} from "@angular/router";


@Component({
    selector: 'ProductView',
    templateUrl: './app/products/product.component.html',
    styleUrls : ['./app/products/products.css']
})

export class ProductComponent implements OnInit {
    title = "Marketplace";
    selectedProduct: Product;
    products: Product[];

    constructor(private productService: ProductService,
                private router : Router) {}

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    gotoDetail() : void {
        this.router.navigate(['/detail', this.selectedProduct.id]);
    }

}