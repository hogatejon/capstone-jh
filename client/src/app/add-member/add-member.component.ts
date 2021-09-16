import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Member } from '../models/Member';
import { MessageService } from '../shared/components/message/message.service';
import { MemberService } from '../shared/services/member.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit, OnDestroy {

  @Input() addGroupId: string;
  @Input() isEdit?: boolean;
  @Input() currentValue?: Member;
  @Output() modalClose = new EventEmitter<boolean>();
  memberForm: FormGroup;
  ngDestroyed$: Subject<boolean> = new Subject();
  submit: boolean = false;
  action: string = 'Add';

  constructor(private readonly fb: FormBuilder,
              private readonly memberService: MemberService,
              private readonly messageService: MessageService) { }

  ngOnInit(): void {
    this.buildMemberForm();
    if (this.currentValue) {
      this.populateForm();
    }
    if (this.isEdit) {
      this.action = 'Edit';
    }
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  exitModal() {
    this.modalClose.emit(true);
  }

  buildMemberForm() {
    this.memberForm = this.fb.group({
      'MemberName': [null, Validators.required],
      'MemberEmail': [null, [Validators.required, Validators.email]],
      'MemberPhone': [null, Validators.required]
    });
  }

  populateForm() {
    this.memberForm.patchValue(this.currentValue);
  }

  onSubmit() {
    this.submit = true;
    if (this.memberForm.valid) {
      if (!this.currentValue) {
        this.memberService.addMemberToGroup(this.addGroupId, this.memberForm.getRawValue()).pipe(takeUntil(this.ngDestroyed$)).subscribe(
          () => {
            this.messageService.showMessage('Member Added!', `You successfully added a member!`, 'success');
            this.exitModal()
          //TODO: Add error Handling
          }
        );
      } else {
        const addId = this.memberForm.getRawValue();
        addId.MemberId = this.currentValue.MemberId;
        this.memberService.editMemberInGroup(this.addGroupId, addId).pipe(takeUntil(this.ngDestroyed$)).subscribe(
          () => {
            this.messageService.showMessage('Member Edited!', `You successfully edited an existing member!`, 'success');
            this.exitModal();
          }
        );
      }
    } else {
      this.memberForm.markAllAsTouched();
      this.memberForm.markAsDirty();
      this.messageService.showMessage('Error', 'Please fill out whole form before submitting', 'error');
    }
  }
}
