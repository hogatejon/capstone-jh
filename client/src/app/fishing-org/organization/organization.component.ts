import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  @Input() orgName: string;
  @Input() orgDescription: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
