import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Member } from '../models/Member';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit, OnDestroy {

  @Input() addGroupId: string;
  @Input() currentValue: Member;
  @Output() modalClose = new EventEmitter<boolean>();
  memberForm: FormGroup;
  ngDestroyed$: Subject<boolean> = new Subject();
  submit: boolean = false;

  constructor(private readonly fb: FormBuilder,
              private readonly memberService: MemberService) { }

  ngOnInit(): void {
    this.buildMemberForm();
    if (this.currentValue) {
      this.populateForm();
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
    if (this.memberForm.valid && !this.currentValue) {
      this.memberService.addMemberToGroup(this.addGroupId, this.memberForm.getRawValue()).pipe(takeUntil(this.ngDestroyed$)).subscribe(
        () => this.exitModal()
        //TODO: Add error Handling
      );
    } else {
      const addId = this.memberForm.getRawValue();
      addId.MemberId = this.currentValue.MemberId;
      this.memberService.editMemberInGroup(this.addGroupId, addId).pipe(takeUntil(this.ngDestroyed$)).subscribe(
        () => this.exitModal()
      );
    }
  }
}
