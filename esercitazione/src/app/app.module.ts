import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListaComponent } from './lista/lista.component';
import { DettagliComponent } from './dettagli/dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ListaComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
