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
        'Bearer BQD6g_E1F93zaF4cqd4KmHJgFcpF_SbnjvnGY5abK8JInupNoYaGXri1u2Slyag8pKi2wgDppuzbdh4sq91NA_DlcpRLeQh14kauCm3LsK4DBo1FGuQ98sI_vbq8qN2LsZe7LAF-fwBpXCy7EMQgmNpK6-QEO3tQ6Sgxlo9E_o87REg8h5mJHukfb2jP2mGwQGwM'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD6g_E1F93zaF4cqd4KmHJgFcpF_SbnjvnGY5abK8JInupNoYaGXri1u2Slyag8pKi2wgDppuzbdh4sq91NA_DlcpRLeQh14kauCm3LsK4DBo1FGuQ98sI_vbq8qN2LsZe7LAF-fwBpXCy7EMQgmNpK6-QEO3tQ6Sgxlo9E_o87REg8h5mJHukfb2jP2mGwQGwM'
    });
    
    return this.http.get(url, { headers });
  }
}
