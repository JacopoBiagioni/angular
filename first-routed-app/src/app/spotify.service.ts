import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBmWRJpQj1NgUEvkRTH7vR3m63kIEmVBLLYtFnGj6HUqj98YWl6hgRMx1q74hnea8EWq_AQz2QID5roziNwByr6k6IbZDeH9n4TgJPIe7xBWjpFKbWsV-KpTZICFwRzaJxPMMJMWGi5mLDzbtKlPI9ZcWuAmLuB1F_8E-3hjYBm3FSkemig8x1gBPFLzdPFiJB2'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
