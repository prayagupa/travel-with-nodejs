import { Component, Input } from '@angular/core'

import { Product } from './Product'

@Component({
    selector: 'my-product-detail',
    templateUrl: './app/product/product-detail.component.html'
})

export class ProductDetailComponent {
    @Input()
    product: Product;
}