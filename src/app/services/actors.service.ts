import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Actor } from '@app/features/movies/types/Actor';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  private path = `${environment.apiUrl}/actors`;

  constructor(private http: HttpClient) {}

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.path);
  }
}
