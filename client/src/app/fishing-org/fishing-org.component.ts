import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FishingOrganization } from '../models/FishingOrganization';
import { GroupService } from '../shared/group.service';
import { OrganizationService } from '../shared/organization.service';

@Component({
  selector: 'app-fishing-org',
  templateUrl: './fishing-org.component.html',
  styleUrls: ['./fishing-org.component.scss']
})
export class FishingOrgComponent implements OnInit, OnDestroy {
  ngDestroyed$: Subject<boolean> = new Subject();
  organizations$: Observable<FishingOrganization[]>;

  constructor(private readonly organizationService: OrganizationService) { }

  ngOnInit(): void {
    this.getOrganizationsAsyncPipe();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  getOrganizationsAsyncPipe() {
    this.organizations$ = this.organizationService.organizations$;
  }
}
