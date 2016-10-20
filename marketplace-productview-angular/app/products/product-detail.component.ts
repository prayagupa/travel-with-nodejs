import { Component, Input } from '@angular/core'

import { Product } from './Product'

@Component({
    selector: 'ProductDetailView',
    templateUrl: './app/products/product-detail.component.html'
})

export class ProductDetailComponent {
    @Input()
    product: Product;
}