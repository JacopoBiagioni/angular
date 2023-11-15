import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlayerList } from './PlayersList.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nba';

  PlayersList! : PlayerList
  obs! : Observable<PlayerList>



  constructor (private http : HttpClient) 
  {
    this.obs = this.http.get<PlayerList>("https://www.balldontlie.io/api/v1/players");
    this.obs.subscribe(this.doSomething)

  }

  doSomething = (data : PlayerList) => {
    this.PlayersList = data
  }



}
