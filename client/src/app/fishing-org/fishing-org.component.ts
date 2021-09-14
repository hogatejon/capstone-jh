import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FishingOrganization } from '../models/FishingOrganization';
import { OrganizationService } from '../shared/organization.service';

@Component({
  selector: 'app-fishing-org',
  templateUrl: './fishing-org.component.html',
  styleUrls: ['./fishing-org.component.scss']
})
export class FishingOrgComponent implements OnInit {
  organizations$: Observable<FishingOrganization[]>;

  ngDestroyed$ = new Subject();

  constructor(private readonly organizationService: OrganizationService) { }

  ngOnInit() {
    this.organizations$ = this.organizationService.organizations$;
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }
}
