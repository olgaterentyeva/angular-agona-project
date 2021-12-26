import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmInfoComponent } from './pages/film-info/film-info.component';
import { CollectionComponent } from './pages/collection/collection.component';
import {ReactiveFormsModule} from "@angular/forms";
import {OverlayModule} from "@angular/cdk/overlay";
import { FilmComponent } from './components/film/film.component';
import {ToggleComponent} from "./components/toggle/toggle.component";
import { GenresSearchComponent } from './components/genres-search/genres-search.component';
import { DescriptionFilmComponent } from './pages/description-film/description-film.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmInfoComponent,
    CollectionComponent,
    FilmComponent,
    ToggleComponent,
    GenresSearchComponent,
    DescriptionFilmComponent,
    SaveButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
