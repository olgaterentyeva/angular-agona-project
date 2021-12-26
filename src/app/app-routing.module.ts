import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmInfoComponent} from "./pages/film-info/film-info.component";
import {CollectionComponent} from "./pages/collection/collection.component";
import {FilmComponent} from "./components/film/film.component";
import {DescriptionFilmComponent} from "./pages/description-film/description-film.component";

const routes: Routes = [
  {
    path: '',
    component: FilmInfoComponent,
    pathMatch: 'full'
  },
  {
    path: 'collection',
    component: CollectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
