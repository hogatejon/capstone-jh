import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Charter } from '../models/Charter';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit, OnDestroy {

  ngDestroyed$ = new Subject();
  group: Charter;
  showMemberModal: boolean = false;
  availMessage: string;
  isFull: boolean;

  constructor(private readonly groupService: GroupService) { }

  ngOnInit(): void {
    this.subscribeToSelectedGroup();
    this.setAvailability();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
    this.groupService.selectedGroup.next(null);
  }

  addNewMember() {
    this.showMemberModal = true;
  }

  hideMemberModal() {
    this.subscribeToMembers();
    this.showMemberModal = false;
  }

  setAvailability() {
    const max = this.group.MaxGroupSize;
    const current = this.group.Members.length;

    console.log(max);
    console.log(current);

    if (max > current) {
      this.isFull = false;
      this.availMessage = `${current}/${max} Spots Available`;
    } else {
      this.isFull = true;
      this.availMessage = `${current}/${max} No Spots Available`
    }
  }

  private subscribeToSelectedGroup() {
    this.groupService.selectedGroup.pipe(takeUntil(this.ngDestroyed$)).subscribe((group) => {
      this.group = group;
    })
  }

  private subscribeToMembers() {
    this.groupService.getCharterById(this.group.GroupId).pipe(takeUntil(this.ngDestroyed$)).subscribe((group: Charter) => {
      this.group = group;
      this.setAvailability();
    });
  }
}
