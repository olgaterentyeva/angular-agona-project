import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.sass']
})
export class FilmInfoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      filmSearch: [null, [Validators.required]]
    });
    this.form = this.fb.group({
      toggleSwitch: [true]
    });
  }

  ngOnInit(): void {
  }

}
