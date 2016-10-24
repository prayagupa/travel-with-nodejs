Template Syntax | Angular Piping
--------------------------------

* How do you create a instance of an injector for DI in Angular 2?

```
import { Injectable } from '@angular/core'
import { Product }  from './Product'

@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return http.getProducts();
    }
}

```

* With DI application becomes more flexible for changes. Support this statement.

```
- DI/IoC makes it simple for me to manage dependencies between objects. 
In turn, that makes it easier for me to break coherent functionality off into it's own contract (interface).

- Supports the Open-Closed Principle. This is one of the most confidence inspiring techniques 
(second only to automated testing). I doubt I could espouse the virtues of Open-Closed Principle enough.


```

* @Injectable() is a mandatory decorator used for  a Service class. (YES)

* What is a service provider?

_register service and tell `Angular Injector` to use the service_
 
* Dependency instance in Angular 2 is an application wide singleton. (NO)

* Registering provider in the root module is the only way to scope a service to become application wide.

* What are dependency injection tokens? What is OpaqueToken?

* How can you make a dependency optional?

* Apart from services, we also need dependency injection in our components and directives. 
But we never used @injectable() for our component. Why?
