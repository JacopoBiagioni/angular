import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlayersList } from './PlayersList.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nba';

  PlayersList! : PlayersList
  obs! : Observable<PlayersList>



  constructor (private http : HttpClient) 
  {
    this.obs = this.http.get<PlayersList>("https://www.balldontlie.io/api/v1/players");
    this.obs.subscribe(this.doSomething)

  }

  doSomething = (data : PlayersList) => {
    this.PlayersList = data
  }

  getLastPart (url : string ) {
    var parts = url.split("/");
    console.log(parts)
    var lastSegment = parts.pop;
    return lastSegment
  }
}
