import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmInfoComponent } from './pages/film-info/film-info.component';
import { CollectionComponent } from './pages/collection/collection.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ToggleComponent } from './components/toggle/toggle.component';
import {OverlayModule} from "@angular/cdk/overlay";
import { ButtonComponent } from './components/button/button.component';
import { FilmComponent } from './components/film/film.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmInfoComponent,
    CollectionComponent,
    ToggleComponent,
    ButtonComponent,
    FilmComponent
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
