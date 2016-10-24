import {Component}    from    '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'DashboardMainView',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/products" routerLinkActive="active">Products</a>
  </nav>
  <router-outlet></router-outlet>
  `
    ,
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    title = "Marketplace";
}
