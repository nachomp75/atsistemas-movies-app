import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';
import { catchError, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';

import { environment } from 'environments/environment';
import { Movie } from '../types/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private path = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient, private translate: TranslateService) {}

  private handleError<T>(showAlert = false, result?: T) {
    return (error: any): Observable<T> => {
      if (showAlert) {
        this.translate.get('swal.unexpected').subscribe((res) => {
          Swal.fire({
            title: 'Error!',
            text: res,
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
      console.error(error);
      return of(result as T);
    };
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http
      .get<Movie>(`${this.path}/${id}`)
      .pipe(catchError(this.handleError<Movie>(true)));
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.path)
      .pipe(catchError(this.handleError<Movie[]>(true, [])));
  }

  searchMoviesByTitle(title: string): Observable<Movie[]> {
    if (!title.trim()) {
      return this.getAllMovies();
    }
    return this.http
      .get<Movie[]>(`${this.path}?title_like=${title}`)
      .pipe(catchError(this.handleError<Movie[]>(true, [])));
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http
      .post<Movie>(this.path, movie)
      .pipe(catchError(this.handleError<Movie>(true)));
  }

  removeMovie(id: number): Observable<Movie> {
    return this.http
      .delete<Movie>(`${this.path}/${id}`)
      .pipe(catchError(this.handleError<Movie>(true)));
  }
}
