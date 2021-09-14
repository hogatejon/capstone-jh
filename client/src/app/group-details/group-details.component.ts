import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
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
  charter$: Observable<Charter>;
  group: Charter;
  groupId: string;
  showMemberModal: boolean = false;
  availMessage: string;
  isFull: boolean;
  showGroupModal: boolean = false;
  isLoading: boolean = true;

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
    this.showMemberModal = false;
    window.location.reload();
  }

  hideGroupModal() {
    this.showGroupModal = false;
    this.reload();
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
    window.location.reload();
  }

  private subscribeToRouteParams() {
    this.route.queryParams.pipe(takeUntil(this.ngDestroyed$)).subscribe((params: Params) => {
      this.charter$ = this.groupService.getCharterById(params.groupId);
    });
  }

  // private subscribeToGroupById(id: number) {
  //   this.groupService.getCharterById(id).pipe(takeUntil(this.ngDestroyed$)).subscribe((group: Charter) => {
  //     this.group = group;
  //     this.setAvailability();
  //     this.isLoading = false;
  //   });
  // }
}
