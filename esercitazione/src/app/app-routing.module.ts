import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListaComponent } from './lista/lista.component';
import { DettagliComponent } from './dettagli/dettagli.component';

const routes: Routes = [
  {path: "", component:ListaComponent},
  {path: "pokemon/:path", component: PokemonComponent},
  {path: "pokemon/detail/:name", component: DettagliComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
