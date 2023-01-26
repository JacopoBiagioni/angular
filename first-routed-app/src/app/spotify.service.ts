import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDNu5pBZbag12UCgU9A9u8-5Kz173uUorNEhhfGzhLECDxsqviLht8dLgKbliWjpdWmqV7adqh9YgTINpxqe6IEv4HvJMmsKYTA5lBCE7zGjTZFksd823WcTFrBinMC6fZIB1HDNAWe54V8kNRH2Tj0mc61Y1cTMnlKgTbFb_sIZsX3NtEvSNESsl7o7pSPvlpE'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

}
