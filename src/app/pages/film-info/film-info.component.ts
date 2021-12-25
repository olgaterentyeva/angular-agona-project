import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { delay, distinctUntilChanged } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.sass']
})
export class FilmInfoComponent {

  form: FormGroup;
  films$ = this.filmService.films$;
  value = '';

  constructor(private fb: FormBuilder,
              private filmService: FilmService) {
    this.form = this.fb.group({
      searchInput: [],
      toggle:["true"]
    });

    // @ts-ignore
    this.form.get('searchInput').valueChanges
      .pipe(
        delay(700),
        distinctUntilChanged(),
      )
      .subscribe(res => {
        this.filmService.searchFilm(res);
      })

    //@ts-ignore
    this.form.get('toggle').valueChanges.subscribe(res => {
      console.log(res)
    })
  }

  onClick(value: boolean):void{
    console.log(value);
  }

}
