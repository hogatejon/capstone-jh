import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/components/message/message.service';
import { GroupService } from 'src/app/shared/services/group.service';
import { Member } from '../../models/Member';
import { MemberService } from '../../shared/services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, OnDestroy {

  @Input() member: Member;
  @Input() groupId: string;
  showMemberModal: boolean = false;
  showDeleteModal: boolean = false;
  deleteHeader: string = 'Delete Member';
  deleteMessage: string;
  ngDestroyed$ = new Subject();
  edit: boolean = false;


  constructor(private readonly memberService: MemberService,
              private readonly groupService: GroupService,
              private readonly messageService: MessageService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  editMember() {
    this.edit = true;
    this.showMemberModal = true;
  }

  hideMemberModal() {
    this.showMemberModal = false;
    this.edit = false;
    this.groupService.getCharterById(this.groupId);
  }

  deleteMember() {
    this.showDeleteModal = true;
    this.deleteMessage = `Are you sure you want to remove ${this.member?.MemberName}`
  }

  resolveDelete(shouldDelete: boolean) {
    if (shouldDelete) {
      this.memberService.deleteMemberFromGroup(this.groupId, this.member.MemberId).pipe(takeUntil(this.ngDestroyed$)).subscribe(
        () => {
          this.messageService.showMessage('Member Deleted!', 'You have successfully deleted a member!', 'success')
          this.groupService.getCharterById(this.groupId);
        }
        //TODO: Add Error Hanlding
      );
    }
    this.showDeleteModal = false;
  }

}
