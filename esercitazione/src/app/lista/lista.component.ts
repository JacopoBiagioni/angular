import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Typelist } from '../Typelist.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  
  obs: Observable <Typelist>;
  data!: Typelist;

  constructor (private http: HttpClient)
  {
    this.obs = this.http.get<Typelist>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Typelist) => {
    this.data = data;
    console.log(this.data)
  }

  getLastPart (data : string) {
    let url = data.split("/").slice(-2)
    console.log(url[0])
    return url[0]
    
  }
}
