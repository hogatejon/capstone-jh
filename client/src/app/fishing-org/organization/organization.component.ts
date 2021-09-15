import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishingOrganization } from 'src/app/models/FishingOrganization';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  @Input() org: FishingOrganization;

  constructor(private readonly router: Router,
              private readonly groupService: GroupService) { }

  ngOnInit(): void {
    this.setFishingImages(this.org);
  }

  navToGroup() {
    this.groupService.filterOrg.next(this.org.OrganizationName);
    this.router.navigate(['/charters']);
  }

  setFishingImages(org: FishingOrganization) {
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
    };
  }
}
