import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject, takeUntil, tap, exhaustMap } from 'rxjs';
import Swal from 'sweetalert2';

import { ActorsService } from '@app/services/actors.service';
import { CompaniesService } from '@app/services/companies.service';
import { MoviesService } from '@app/services/movies.service';
import { Movie } from '@app/types/Movie';
import { Actor } from '@app/types/Actor';
import { Company } from '@app/types/Company';
import { BackButtonComponent } from '@app/shared/components/back-button/back-button.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  @ViewChild(BackButtonComponent) backButton!: BackButtonComponent;

  private alive$: Subject<boolean> = new Subject();

  remove$: Subject<number> = new Subject();

  movie$!: Observable<Movie>;
  actors$!: Observable<Actor[]>;
  company$!: Observable<Company>;

  loadingMovie = true;
  loadingActors = true;
  loadingCompany = true;

  constructor(
    private route: ActivatedRoute,
    private actorsService: ActorsService,
    private companiesService: CompaniesService,
    private moviesService: MoviesService,
    private translate: TranslateService
  ) {
    this.remove$
      .pipe(exhaustMap((id) => this.moviesService.removeMovie(id)))
      .subscribe(() => {
        this.backButton.goBack();
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
    this.route.params.pipe(takeUntil(this.alive$)).subscribe(({ id }) => {
      this.movie$ = this.moviesService
        .getMovieById(id)
        .pipe(tap(() => (this.loadingMovie = false)));
      this.actors$ = this.actorsService
        .getActorsByMovieId(id)
        .pipe(tap(() => (this.loadingActors = false)));
      this.company$ = this.companiesService
        .getCompanyByMovieId(id)
        .pipe(tap(() => (this.loadingCompany = false)));
    });
  }

  ngOnDestroy(): void {
    this.alive$.next(false);
    this.alive$.complete();
  }

  handleRemoveMovie(id: number): void {
    this.remove$.next(id);
  }
}
