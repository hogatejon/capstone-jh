import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Charter } from '../models/Charter';
import { GroupService } from './group.service';

@Component({
  selector: 'app-charters',
  templateUrl: './charters.component.html',
  styleUrls: ['./charters.component.scss']
})
export class ChartersComponent implements OnInit, OnDestroy {

  ngDestroyed$: Subject<boolean> = new Subject();
  orgId: string;
  charters: Charter[];
  showCharterModal: boolean = false;

  constructor(private readonly route: ActivatedRoute,
              private readonly groupService: GroupService) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  addCharter() {
    this.showCharterModal = true;
  }

  hideCharterModal() {
    this.showCharterModal = false;
    this.subscribeToAllGroups();
  }

  private subscribeToRouteParams() {
    this.route.params.pipe(takeUntil(this.ngDestroyed$)).subscribe((params: Params) => {
      if (params?.orgId) {
        this.orgId = params.orgId;
        this.subscribeToSpecificGroup(this.orgId);
      } else {
        this.subscribeToAllGroups();
      }
    }
    // TODO: Add Error Handling here.
    );
  }

  private subscribeToAllGroups() {
    this.groupService.getAllCharters<Charter>().pipe(takeUntil(this.ngDestroyed$)).subscribe((charters) => {
      if (charters) {
        this.charters = charters;
      }
    });
  }

  private subscribeToSpecificGroup(orgId: string) {
    this.groupService.getChartersByOrg<Charter>(orgId).pipe(takeUntil(this.ngDestroyed$)).subscribe((charters) => {
      this.charters = charters;
    });
  }

}
