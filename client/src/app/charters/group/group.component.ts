import { Component, Input, OnInit } from '@angular/core';
import { Charter } from 'src/app/models/Charter';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group: Charter;
  @Input() charterNum: number;

  availableText: string;
  noAvailability: boolean;

  constructor() { }

  ngOnInit() {
    this.setAvailableText();
  }

  setAvailableText() {
    const totalMembers = this.group.Members.length;
    const maxMembers = this.group.MaxGroupSize;

    if (totalMembers >= maxMembers) {
      this.noAvailability = true;
      this.availableText = `${totalMembers}/${maxMembers} No Spots Available`;
    } else {
      this.noAvailability = false;
      this.availableText = `${totalMembers}/${maxMembers} Spots Available`;
    }
  }

}
