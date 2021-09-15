import { Component, OnInit } from '@angular/core';
import { OrganizationService } from './shared/organization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly organizationService: OrganizationService) { }

  ngOnInit() {
    this.organizationService.getOrganizations();
  }
}


