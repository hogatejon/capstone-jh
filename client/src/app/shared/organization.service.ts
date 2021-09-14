import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FishingOrganization } from '../models/FishingOrganization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private orgUrl: string = 'http://localhost:8082/api/organizations';

  constructor(private readonly http: HttpClient) { }

  getOrganizations<FishingOrganization>(): Observable<FishingOrganization[]> {
    return this.http.get<FishingOrganization[]>(this.orgUrl);
  }
}
