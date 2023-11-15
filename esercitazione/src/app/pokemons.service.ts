import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http : HttpClient) { }

  getPokemon(id : string) {
    const url = 'https://pokeapi.co/api/v2/type';
  }
}
