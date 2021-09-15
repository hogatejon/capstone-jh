import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Charter } from '../models/Charter';
import { MessageService } from '../shared/components/message/message.service';
import { GroupService } from '../shared/services/group.service';

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
  orgFilterName: string = '';
  edit: boolean;

  constructor(private readonly groupService: GroupService,
              private readonly messageService: MessageService) { }

  ngOnInit(): void {
    this.groupService.getAllCharters();
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

  filterByOrg(orgName: string) {
    this.orgFilterName = orgName;
  }

  clearFilters() {
    this.orgFilterName = '';
    this.searchValue = '';
  }

  addCharter() {
    this.showCharterModal = true;
  }

  hideCharterModal() {
    this.showCharterModal = false;
  }

  setDeleteModal(group: Charter) {
    this.showDeleteModal = true;
    this.deleteMessage = `Are you sure you want to delete ${group.GroupName}?`
    this.groupIdDelete = group.GroupId;
  }

  resolveDelete(shouldDelete: boolean) {
    if (shouldDelete) {
      this.groupService.deleteCharterById(this.groupIdDelete).pipe(takeUntil(this.ngDestroyed$)).subscribe(
        () => { this.messageService.showMessage('Charter Deleted', 'You have successfully deleted a charter', 'success'); }
      );
    }
    this.showDeleteModal = false;
  }

}
