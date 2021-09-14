import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
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

  isLoading: boolean = true;
  ngDestroyed$: Subject<boolean> = new Subject();
  organizations: Array<FishingOrganization>;

  constructor(private readonly organizationService: OrganizationService,
              private readonly groupService: GroupService) { }

  ngOnInit(): void {
    this.subscribeToOrg();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  setFishingImages(orgs: FishingOrganization[]) {
    orgs.forEach((org) => {
      switch (org.OrganizationId) {
        case '1':
          org.imageUrl = 'assets/deepSea.jpg';
          break;
        case '2':
          org.imageUrl = 'assets/river.jpg';
          break;
        case '3':
          org.imageUrl = 'assets/lake.jpg';
          break;
        case '4':
          org.imageUrl = 'assets/creek.jpg';
          break;
        case '5':
          org.imageUrl = 'assets/ice.jpg';
          break;
        case '6':
          org.imageUrl = 'assets/inshore.jpg';
          break;
      }
    });
  }

  private subscribeToOrg() {
    this.organizationService.getOrganizations<FishingOrganization>().pipe(takeUntil(this.ngDestroyed$)).subscribe(
      orgs => {
        this.organizations = orgs;
        if (this.organizations) {
          this.setFishingImages(this.organizations);
        }
        this.isLoading = false;
      }
    )
  }

}
