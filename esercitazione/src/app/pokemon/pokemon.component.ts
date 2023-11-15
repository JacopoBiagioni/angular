import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonsService } from '../pokemons.service';

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
    private service: PokemonsService
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
      this.pokemonServiceObs = this.service.getPokemon(pokemonid) ;
      this.pokemonServiceObs.subscribe((data: any)=>this.pokemon = data)
    }
  }
  


}
