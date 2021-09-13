import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishingOrganization } from 'src/app/models/FishingOrganization';
import { GroupService } from 'src/app/shared/group.service';

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
  }

  navToGroup() {
    this.groupService.filterOrg.next(this.org.OrganizationName);
    this.router.navigate(['/charters']);
  }

}
