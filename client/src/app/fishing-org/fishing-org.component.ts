import { Component, Input, OnInit } from '@angular/core';

import { FishingOrganization } from '../models/FishingOrganization';
import { OrganizationService } from '../services/organization.service';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-fishing-org',
  templateUrl: './fishing-org.component.html',
  styleUrls: ['./fishing-org.component.scss']
})
export class FishingOrgComponent implements OnInit {

  @Input() altText = false;
  @Input() darkMode = false;

  organizations$: Observable<FishingOrganization[]>;

  ngDestroyed$ = new Subject();

  constructor(private readonly organizationService: OrganizationService) { }

  ngOnInit() {
    this.organizations$ = this.organizationService.organizations$;
    this.organizationService.getOrganizations();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }
}
