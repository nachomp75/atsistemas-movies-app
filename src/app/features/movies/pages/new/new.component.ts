import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { exhaustMap, map, Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';

import { SelectOption } from '@app/types/SelectOption';
import { ActorsService } from '@app/services/actors.service';
import { CompaniesService } from '@app/services/companies.service';
import { MoviesService } from '@app/services/movies.service';
import { Movie } from '@app/types/Movie';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  newMovieForm!: FormGroup;

  actors$!: Observable<SelectOption[]>;
  companies$!: Observable<SelectOption[]>;
  submit$: Subject<Movie> = new Subject();

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  genres: string[] = [];

  constructor(
    private actorsService: ActorsService,
    private companiesService: CompaniesService,
    private moviesService: MoviesService,
    private translate: TranslateService
  ) {
    this.newMovieForm = this.createFormGroup();
    this.submit$
      .pipe(exhaustMap((movie) => this.moviesService.createMovie(movie)))
      .subscribe(() => {
        this.genres = [];
        this.newMovieForm.reset();
        this.translate.get('swal.success').subscribe((res) => {
          Swal.fire({
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 1500,
          });
        });
      });
  }

  ngOnInit(): void {
    this.actors$ = this.actorsService.getActors().pipe(
      map((actors) =>
        actors.map(({ id, first_name, last_name }) => ({
          value: id,
          name: `${first_name} ${last_name}`,
        }))
      )
    );
    this.companies$ = this.companiesService.getCompanies().pipe(
      map((companies) =>
        companies.map(({ id, name }) => ({
          value: id,
          name: name,
        }))
      )
    );
  }

  createFormGroup() {
    return new FormGroup({
      id: new FormControl(Math.floor(Math.random() * 9999999 + 1)),
      title: new FormControl('', [Validators.required]),
      poster: new FormControl('', [Validators.required]),
      genre: new FormControl([]),
      year: new FormControl(null, [Validators.required, Validators.min(0)]),
      duration: new FormControl(null, [Validators.required, Validators.min(0)]),
      imdbRating: new FormControl(null, [
        Validators.max(10),
        Validators.min(1),
      ]),
      actors: new FormControl([]),
      company: new FormControl(null),
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.genres.push(value);
      this.newMovieForm.get('genre')?.setValue([...this.genres]);
    }

    event.chipInput!.clear();
  }

  remove(genre: string): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres.splice(index, 1);
      this.newMovieForm.get('genre')?.setValue([...this.genres]);
    }
  }

  setYear(date: Date, datepicker: MatDatepicker<Date>) {
    this.newMovieForm.get('year')?.setValue(date);
    datepicker.close();
  }

  handleResetForm(event: Event) {
    event.preventDefault();
    this.genres = [];
    this.newMovieForm.reset();
  }

  handleSubmitNewMovie() {
    const body = { ...this.newMovieForm.value };
    this.submit$.next(body);
  }
}
