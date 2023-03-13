import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaratteristicheComponent } from './caratteristiche/caratteristiche.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component : SearchComponent },
  { path: 'caratteristiche/:id', component : CaratteristicheComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
