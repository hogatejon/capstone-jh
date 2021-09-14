import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  groupId: string;
  showMemberModal: boolean = false;
  availMessage: string;
  isFull: boolean;
  showGroupModal: boolean = false;

  constructor(private readonly groupService: GroupService,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
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
    this.subscribeToGroupById(this.group.GroupId);
    this.showMemberModal = false;
  }

  hideGroupModal() {
    this.subscribeToGroupById(this.group.GroupId);
    this.showGroupModal = false;
  }

  editGroup() {
    this.showGroupModal = true;
  }

  setAvailability() {
    const max = this.group?.MaxGroupSize;
    const current = this.group?.Members?.length;

    if (max > current) {
      this.isFull = false;
      this.availMessage = `${current}/${max} Spots Available`;
    } else {
      this.isFull = true;
      this.availMessage = `${current}/${max} No Spots Available`
    }
  }

  reload() {
    this.subscribeToGroupById(this.group.GroupId);
  }

  private subscribeToRouteParams() {
    this.route.queryParams.pipe(takeUntil(this.ngDestroyed$)).subscribe((params: Params) => {
      this.subscribeToGroupById(params.groupId);
    });
  }

  private subscribeToGroupById(id: number) {
    this.groupService.getCharterById(id).pipe(takeUntil(this.ngDestroyed$)).subscribe((group: Charter) => {
      this.group = group;
      this.setAvailability();
    });
  }
}
