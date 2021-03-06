import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FishingOrganization } from '../models/FishingOrganization';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private orgUrl: string = 'http://localhost:8082/api/organizations';
  errorMessage: string;
  organizations$: BehaviorSubject<FishingOrganization[]> = new BehaviorSubject<FishingOrganization[]>(null);

  constructor(private readonly http: HttpClient) { }

  getOrganizations() {
    this.http.get<FishingOrganization[]>(this.orgUrl).subscribe((orgs) => {
      this.organizations$.next(orgs);
    });
  }
}
