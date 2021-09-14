import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Charter } from 'src/app/models/Charter';
import { GroupService } from 'src/app/shared/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group: Charter;
  @Input() charterNum: number;
  @Output() deleteCharter = new EventEmitter<Charter>();

  availableText: string;
  noAvailability: boolean;

  constructor(private readonly groupService: GroupService,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

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

  deleteGroup() {
    this.deleteCharter.emit(this.group);
  }

  navToGroupDetails() {
    this.groupService.updateSelectedGroup(this.group);
    this.router.navigate(['details'], { relativeTo: this.route, queryParams: { groupId: this.group.GroupId } });
  }

}
