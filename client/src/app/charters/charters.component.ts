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
  orgName: string;
  charters: Charter[];
  filteredCharters: Charter[];
  showCharterModal: boolean = false;
  fishingOrgs = ['Deep Sea', 'River', 'Lake', 'Small Creek', 'Ice', 'Inshore'];
  isLoading: boolean = true;

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

  filterByOrg(orgName: string, firstFilter: boolean = false) {
    console.log(orgName)
    if (firstFilter) {
      (<HTMLSelectElement>document.getElementById('orgFilter')).value = this.orgName;
    }
    if (orgName !== '' && this.charters?.length) {
      this.filteredCharters = this.charters.filter(charter => charter.OrganizationName === orgName);
    } else {
      this.filteredCharters = this.charters;
    }
  }

  private subscribeToRouteParams() {
    this.route.params.pipe(takeUntil(this.ngDestroyed$)).subscribe((params: Params) => {
      if (params?.orgName) {
        this.orgName = params.orgName;
      }
      this.subscribeToAllGroups();
    }
    // TODO: Add Error Handling here.
    );
  }

  private subscribeToAllGroups() {
    this.groupService.getAllCharters<Charter>().pipe(takeUntil(this.ngDestroyed$)).subscribe((charters) => {
      if (charters) {
        this.charters = charters;
        if (this.orgName) {
          console.log('run')
          this.filterByOrg(this.orgName, true);
        } else {
          this.filteredCharters = this.charters;
        }
        this.isLoading = false;
      }
    });
  }

  private subscribeToSpecificGroup(orgId: string) {
    this.groupService.getChartersByOrg<Charter>(orgId).pipe(takeUntil(this.ngDestroyed$)).subscribe((charters) => {
      this.charters = charters;
      this.isLoading = false;
    });
  }

}
