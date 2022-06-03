import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

import { MoviesService } from '../../../../services/movies.service';
import { Movie } from '../../types/Movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  private searchTerms = new Subject<string>();

  movies$!: Observable<Movie[]>;
  loading = true;

  constructor(private router: Router, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((title: string) =>
        this.moviesService
          .searchMoviesByTitle(title)
          .pipe(tap(() => (this.loading = false)))
      )
    );
  }

  ngAfterViewInit(): void {
    this.search('');
  }

  search(title: string): void {
    this.loading = true;
    this.searchTerms.next(title);
  }

  handleNewMovie() {
    this.router.navigate(['/movies', 'new']);
  }
}
