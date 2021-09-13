import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishingOrganization } from 'src/app/models/FishingOrganization';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  @Input() org: FishingOrganization;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  navToGroup() {
    this.router.navigate(['/charters', { orgName: this.org.OrganizationName }]);
  }

}
