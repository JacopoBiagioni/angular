import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Typelist } from './Typelist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercitazione';

  PokemonList!: Typelist;
  obs!: Observable <Typelist>;

  constructor (private http: HttpClient)
  {
    this.obs = this.http.get<Typelist>("https://pokeapi.co/api/v2/type");
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Typelist) => {
    this.PokemonList = data
  }

  getLastPart (url : string ) {
    var parts = url.split("/");
    console.log(parts)
    var lastSegment = parts.pop;
    return lastSegment
    
  }
}
