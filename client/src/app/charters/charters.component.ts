import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Charter } from '../models/Charter';
import { GroupService } from '../shared/group.service';

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
  deleteHeader: string = 'Delete Group';
  deleteMessage: string = 'Are you sure you want to delete this group?'
  showDeleteModal: boolean = false;
  groupIdDelete: number;
  noChartersInSearch: boolean = false;

  constructor(private readonly groupService: GroupService) { }

  ngOnInit(): void {
    this.subscribeToFilter();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
    this.groupService.filterOrg.next(null);
  }

  addCharter() {
    this.showCharterModal = true;
  }

  setDeleteModal(group: Charter) {
    this.showDeleteModal = true;
    this.deleteMessage = `Are you sure you want to delete ${group.GroupName}?`
    this.groupIdDelete = group.GroupId;
  }

  resolveDelete(shouldDelete: boolean) {
    if (shouldDelete) {
      alert('Charter Deleted!')
      this.groupService.deleteCharterById(this.groupIdDelete).pipe(takeUntil(this.ngDestroyed$)).subscribe(
        () => this.subscribeToAllGroups()
        //TODO: Add Error Handling
      )
    }
    this.showDeleteModal = false;
  }

  hideCharterModal() {
    this.showCharterModal = false;
    this.subscribeToAllGroups();
  }

  filterByOrg(orgName: string, firstFilter: boolean = false) {
    if (firstFilter) {
      (<HTMLSelectElement>document.getElementById('orgFilter')).value = this.orgName;
    }
    if (orgName !== '' && this.charters?.length) {
      this.filteredCharters = this.charters.filter(charter => charter.OrganizationName === orgName);
    } else {
      this.filteredCharters = this.charters;
    }
  }

  searchCharters(event) {
    if (event.target.value) {
      const searchText = event.target.value.toLowerCase();
      this.filteredCharters = this.charters.filter(charter => {
        return charter.GroupName.toLowerCase().indexOf(searchText) !== -1 ||
               charter.OrganizationName.toLowerCase().indexOf(searchText) !== -1 ||
               charter.SponsorName.toLowerCase().indexOf(searchText) !== -1 ||
               charter.SponsorPhone.indexOf(searchText) !== -1 ||
               charter.SponsorEmail.toLowerCase().indexOf(searchText) !== -1;
      });
    } else {
      this.filteredCharters = this.charters
    }
  }

  private subscribeToFilter() {
    this.groupService.filterOrg.pipe(takeUntil(this.ngDestroyed$)).subscribe((filter: string) => {
      this.orgName = filter;
      this.subscribeToAllGroups();
    });
  }

  private subscribeToAllGroups() {
    this.groupService.getAllCharters<Charter>().pipe(takeUntil(this.ngDestroyed$)).subscribe((charters) => {
      if (charters) {
        this.charters = charters;
        if (this.orgName) {
          this.filterByOrg(this.orgName, true);
        } else {
          this.filteredCharters = this.charters;
        }
        this.isLoading = false;
      }
    }
    //TODO: Add Error Handling
    );
  }
}
