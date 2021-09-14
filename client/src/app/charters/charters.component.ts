import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  charters$: Observable<Charter[]>;
  filteredCharters: Charter[];
  showCharterModal: boolean = false;
  fishingOrgs = ['Deep Sea', 'River', 'Lake', 'Small Creek', 'Ice', 'Inshore'];
  deleteHeader: string = 'Delete Group';
  deleteMessage: string = 'Are you sure you want to delete this group?'
  showDeleteModal: boolean = false;
  groupIdDelete: number;
  noChartersInSearch: boolean = false;
  searchValue: string = '';

  constructor(private readonly groupService: GroupService) { }

  ngOnInit(): void {
    this.charters$ = this.groupService.charters$;
    this.groupService.filterOrg.subscribe(group => {
      if (group) {
        this.searchValue = group
      }
    });
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
    this.groupService.filterOrg.next(null);
  }

  searchCharters(event) {
    this.searchValue = event?.target?.value;
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
      alert('Deleted!')
    }
    this.showDeleteModal = false;
  }

  hideCharterModal() {
    this.showCharterModal = false;
  }

}
