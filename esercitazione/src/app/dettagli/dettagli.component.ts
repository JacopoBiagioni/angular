import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent {
  routeObs!: Observable<ParamMap>;

  dettagli: any;
  dettagliObs!: Observable<Object>;

  constructor (
    private route: ActivatedRoute,
    private http: HttpClient) {}
  
    ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
    }
  getRouterParam = (params : ParamMap) => {
    let pokemonid = params.get('name');
    console.log(pokemonid)
    if (pokemonid != null) {
      this.dettagliObs = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
      this.dettagliObs.subscribe(this.doSomething)
    }
  }

  doSomething = (data : any) => {
    this.dettagli = data;
    console.log(this.dettagli)
  }
}
