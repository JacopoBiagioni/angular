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
        'Bearer BQAxiFHg3upPnafM5mzMBdJRvpv8dSuhYkONMjTrhX8qfRV6f9Ass1Jp4CrvfZZhDq7TCGL6sY3avL96w4UI0PXtElxz7iYCgS6yQW-AYOcqRQEXUBmPXmnoQakM3PEEZTBNU78YPkC1y2LIJqg4bE6BIyq5aW_jtBTNDBD51A8MDFcph2sXUTUJ8Swxlz3D9Q7H'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAxiFHg3upPnafM5mzMBdJRvpv8dSuhYkONMjTrhX8qfRV6f9Ass1Jp4CrvfZZhDq7TCGL6sY3avL96w4UI0PXtElxz7iYCgS6yQW-AYOcqRQEXUBmPXmnoQakM3PEEZTBNU78YPkC1y2LIJqg4bE6BIyq5aW_jtBTNDBD51A8MDFcph2sXUTUJ8Swxlz3D9Q7H'
    });
    
    return this.http.get(url, { headers });
  }
}
