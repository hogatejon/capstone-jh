import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FishingOrganization } from '../models/FishingOrganization';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-fishing-org',
  templateUrl: './fishing-org.component.html',
  styleUrls: ['./fishing-org.component.scss']
})
export class FishingOrgComponent implements OnInit, OnDestroy {

  ngDestroyed$: Subject<boolean> = new Subject();
  organizations: Array<FishingOrganization>;

  constructor(private readonly organizationService: OrganizationService) { }

  ngOnInit(): void {
    this.subscribeToOrg();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  private subscribeToOrg() {
    this.organizationService.getOrganizations<FishingOrganization>().pipe(takeUntil(this.ngDestroyed$)).subscribe(
      orgs => {
        this.organizations = orgs;
      }
    )
  }

}
