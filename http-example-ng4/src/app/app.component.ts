import {Component, OnInit} from '@angular/core';
import {ArtistService} from "./artist/ArtistService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';

  constructor(private service: ArtistService) {

  }

  ngOnInit(): void {
    console.log("WTF")
    this.service.getMusics().then(string => console.log(string))
  }

}
