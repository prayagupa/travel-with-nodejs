angularjs mvvw 
--------------

https://angular.io/docs/ts/latest/guide/architecture.html

https://angular.io/docs/ts/latest/guide/forms.html

```
npm install
npm start
```


* When using `*ngIf` directive, element will be hidden from the view when the condition results to 
`falsy` value, but is still available in the DOM? (NO)

```
<div *ngIf="{{songsPlay}}==1000">Popular Song</div>

Angular isn't showing and hiding the message. It is adding and
removing the paragraph elements from the DOM.
```

* `$event` always represents standard DOM object? (NO)

_The shape of the $event object is determined by whatever raises the event_

```
export class SearchArtistCompoment {
  searchQuery = '';

  // without strong typing
  onKey(event:any) {
    this.searchQuery += event.target.value + ' | ';
  }
}
```

* `$event` is the only way get user data? (NO)

_Template reference variable can be used to get user data_

```
@Component({
  selector: 'SearchArtistView',
  template: `
    <input #artist (keyup)="onKey(artist.value)">
    <p>{{searchQuery}}</p>
  `
})
export class SearchArtistCompoment {
  searchQuery = '';
  onKey(artist: string) {
    this.searchQuery += artist + ' | ';
  }
}
```

* What are pseudo events?

```
@Component({
  selector: 'SearchArtistView',
  template: `
    <input #artist (keyup.enter)="searches=artist.value">
    <p>{{searches}}</p>
  `
})

export class SearchArtistComponent {
  searches = '';
}
```

* In the code given below, what was the reason behind attaching keyup event 
which is basically doing nothing?

```html
<input #referenceVariable (keyup)="0">
```

* What does it mean to say control is in following state

```
    Pristine/ Dirty
    Touched
    Invalid
```


* How does angular lets us know about the different state of a form control?

```
submit
valid
```