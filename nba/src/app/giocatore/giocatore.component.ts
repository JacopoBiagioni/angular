import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { GiocatoriService } from '../giocatori.service';

@Component({
  selector: 'app-giocatore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './giocatore.component.html',
  styleUrl: './giocatore.component.css'
})
export class GiocatoreComponent implements OnInit{

  routeObs! : Observable<ParamMap>
  giocatore : any
  giocatoreServiceObs : any

  constructor( 
    private route : ActivatedRoute,
    private service : GiocatoriService
  )  {  }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap,
    this.routeObs.subscribe(this.getRouteParam);

  }

  getRouteParam = (params : ParamMap) =>
  {
    let giocatoreid = params.get('id')
    console.log('giocatoreid')
    if (giocatoreid != null)
    {
      this.giocatoreServiceObs = this.service.getGiocatore(giocatoreid);
      this.giocatoreServiceObs.subscribe((data : any)=>this.giocatore = data)
    }
  }


  
}
