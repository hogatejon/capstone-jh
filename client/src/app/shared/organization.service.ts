import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EMPTY, Observable } from 'rxjs';

import { FishingOrganization } from '../models/FishingOrganization';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private orgUrl: string = 'http://localhost:8082/api/organizations';
  errorMessage: string;

  constructor(private readonly http: HttpClient) { }

  organizations$: Observable<FishingOrganization[]> = this.http.get<FishingOrganization[]>(this.orgUrl).pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
}
