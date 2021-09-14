import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Member } from '../models/Member';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, OnDestroy {

  @Input() member: Member;
  @Input() groupId: string;
  @Output() reload = new EventEmitter<boolean>();
  showMemberModal: boolean = false;
  showDeleteModal: boolean = false;
  deleteHeader: string = 'Delete Member';
  deleteMessage: string;
  ngDestroyed$ = new Subject();


  constructor(private readonly memberService: MemberService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  editMember() {
    this.showMemberModal = true;
  }

  hideMemberModal() {
    this.showMemberModal = false;
    this.reload.emit(true);
  }

  deleteMember() {
    this.showDeleteModal = true;
    this.deleteMessage = `Are you sure you want to remove ${this.member?.MemberName}`
  }

  resolveDelete(shouldDelete: boolean) {
    if (shouldDelete) {
      this.memberService.deleteMemberFromGroup(this.groupId, this.member.MemberId).pipe(takeUntil(this.ngDestroyed$)).subscribe(
        () => this.reload.emit(true)
        //TODO: Add Error Hanlding
      );
    }
    this.showDeleteModal = false;
  }

}
