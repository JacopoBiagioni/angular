import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  routeObs: Observable<ParamMap> = undefined!;
  pokemon : any;
  pokemonServiceObs: any;


  constructor(
    private route: ActivatedRoute,
    private service: PokemonService
  ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let pokemonid = params.get('id');
    console.log(pokemonid)
    if (pokemonid != null)
    {
      this.pokemonServiceObs = this.service.getTrack(pokemonId) ;
    this.pokemonServiceObs.subscribe((data: any)=>this.pokemon = data)
    }
  }
  


}
