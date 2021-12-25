import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import { FilmService } from './services/film.service';
import {delay, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'agona-project';
  form: FormGroup;
  films$ = this.filmService.films$;

  constructor(private fb: FormBuilder, private filmService: FilmService) {
    this.form = this.fb.group({
      filmSearch: [],
      genre: [[]]
    });


    // this.form.get(`filmSearch`).valueChanges
    //   .pipe(
    //     delay(700),
    //     distinctUntilChanged(),
    //   )
    //   .subscribe(res => {
    //     this.filmService.searchFilm(res);
    //   });
  }

  // formatValue(arr: any[], id): any {
  //   return arr.find(item => item.id === id);
  // }
  //
  // removeElement(inx: number): any {
  //   (this.form.get('form') as FormArray).removeAt(inx);
  // }
}

