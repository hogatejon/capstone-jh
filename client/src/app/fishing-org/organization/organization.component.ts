import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  @Input() orgName: string;
  @Input() orgDescription: string;
  @Input() image: string

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  navToGroup() {
    this.router.navigate(['/charters', { orgType: this.orgName }]);
  }

}
