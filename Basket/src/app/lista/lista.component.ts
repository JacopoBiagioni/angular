import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Players } from '../models/players.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  obs!: Observable<Players>;
  data!: Players;

  // Richiesta al server e assegnazione dei dati
  constructor (public http : HttpClient) {
    this.obs = this.http.get<Players>('https://www.balldontlie.io/api/v1/players')
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Players) => {
    this.data = data
    console.log(this.data)
  }


}
