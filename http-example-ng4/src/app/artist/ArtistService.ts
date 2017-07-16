/**
 * Created by prayagupd
 * on 7/15/17.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArtistService {

  constructor(private http: Http) {}

  getMusics(): Promise<string> {

    return this.http.get("https://jsonplaceholder.typicode.com/posts/1").toPromise()
      .then(response => JSON.stringify(response.json()))
      .catch(error => Promise.reject("you fked it"))
  }
}
