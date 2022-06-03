import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Company } from '@app/features/movies/types/Company';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private path = `${environment.apiUrl}/companies`;

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.path);
  }
}
