import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.openfoodfacts.org/cgi/search.pl?search_terms=';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${query}`);
  }

  getItem(id: string): Observable<any> {
    return this.http.get<any>(`https://api.openfoodfacts.org/api/v0/product/${id}.json`);
  }
}
