import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Charter } from '../../models/Charter';
import { GroupService } from '../../services/group.service';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit, OnDestroy {

  ngDestroyed$ = new Subject();
  charter$: Observable<Charter>;
  showMemberModal: boolean;
  showGroupModal: boolean;
  availMessage: string;
  edit: boolean;
  groupId: number;
  isFull: boolean;

  constructor(private readonly groupService: GroupService,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
    this.charter$ = this.groupService.charterById$;
    this.checkIsFull();
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

  checkIsFull() {
    if (document.querySelector('header > p').classList.contains('no-avail')) {
      this.isFull = true;
    } else {
      this.isFull = false;
    }
  }

  private subscribeToRouteParams() {
    this.route.queryParams.pipe(takeUntil(this.ngDestroyed$)).subscribe((params: Params) => {
      this.groupId = params.groupId;
      this.groupService.getCharterById(params.groupId);
    });
  }
}
