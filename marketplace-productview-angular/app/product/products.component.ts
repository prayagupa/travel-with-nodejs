import { Component }        from '@angular/core';
import { Product }  from '../Product'
import { ProductService }   from '../product.service'
import { OnInit }         from '@angular/core'
import { Router }       from '@angular/router'


@Component({
    moduleId: module.id,
    selector: 'my-products',
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.css']

})

export class ProductsComponent implements OnInit {
  
  selectedProduct : Product;
  products : Product[];

  constructor(
    private productService : ProductService,
    private router : Router
    ) {}

  onSelect(product:Product):void {
    this.selectedProduct = product;
  }

  getProducts() : void {
    this.productService.getProducts().then( products => this.products = products);
  }

  ngOnInit() : void {
    this.getProducts();
  }

  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }

  add(name:string) : void {
      name = name.trim();
      if (!name) { return; }
      this.productService.create(name)
        .then(product => {
          this.products.push(product);
          this.selectedProduct = null;
        });
  }

  delete(product: Product) : void {
    this.productService.delete(product.id).then(() => {this.products = this.products.filter(p => p != product);
      if(this.selectedProduct === product) {this.selectedProduct = null;}});
  }
}