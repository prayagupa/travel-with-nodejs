
https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel

* what represents Model, View and Controller in an angular application (component)? 

M - JS object
V - Templates
C - Component

* Angular 2 is a component based framework. Support this statement.

* What decorator function is used to decorate a service class?

_@Injectable() on the service_

```
@Injectable
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }
}
```

* What are lifecycle hooks? How are they useful?

![](https://angular.io/resources/images/devguide/lifecycle-hooks/hooks-in-sequence.png)

https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html

* Does angular 2 has two-way data binding default? Can we achieve it?

```
<input [(ngModel)]="product.name">
```

* What is the idea behind angular forcing us to write a separate bootstrap file (main.ts)?

```
const platform = platformBrowserDynami
```

* What was purpose of each?
```
    package.json
    tsconfig.json
    typings.json
    Systemjs.config.js
``` 

* The command you used for starting your application was “npm start”, 
is this the inbuilt npm command to start your  angular application?
