import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiocatoriService {

  constructor(private http : HttpClient) {

  }

  getGiocatore (id : string) {
    const url = 'https://www.balldontlie.io/api/v1/players'
  }
}
