import {Component}        from '@angular/core';
import {Product}  from './products/Product'
import {ProductService}   from './products/product.service'
import {OnInit}         from '@angular/core'


@Component({
    selector: 'ProductView',
    templateUrl: './app/products/product.component.html',

    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .products .text {
    position: relative;
    top: -3px;
  }
  .products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],

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