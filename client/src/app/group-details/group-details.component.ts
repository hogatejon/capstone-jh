import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Charter } from '../models/Charter';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit, OnDestroy {

  ngDestroyed$ = new Subject();
  charter$: Observable<Charter>;
  showMemberModal: boolean = false;
  showGroupModal: boolean = false;
  availMessage: string;
  edit: boolean = false;
  groupId: number;

  constructor(private readonly groupService: GroupService,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
    this.charter$ = this.groupService.charterById$;
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
    this.groupService.getCharterById(this.groupId);
  }

  hideGroupModal() {
    this.showGroupModal = false;
    this.groupService.getCharterById(this.groupId);
  }

  editCharter() {
    this.edit = true;
    this.showGroupModal = true;
  }

  isFull() {
    if (document.querySelector('header > p').classList.contains('no-avail')) {
      return true;
    } else {
      return false;
    }
  }

  private subscribeToRouteParams() {
    this.route.queryParams.pipe(takeUntil(this.ngDestroyed$)).subscribe((params: Params) => {
      this.groupId = params.groupId;
      this.groupService.getCharterById(params.groupId);
    });
  }
}
