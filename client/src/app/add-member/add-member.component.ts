import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit, OnDestroy {

  @Input() addGroupId: string;
  memberForm: FormGroup;
  ngDestroyed$: Subject<boolean> = new Subject();
  submit: boolean = false;
  @Output() modalClose = new EventEmitter<boolean>();

  constructor(private readonly fb: FormBuilder,
              private readonly memberService: MemberService) { }

  ngOnInit(): void {
    this.buildMemberForm();
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
    })
  }

  onSubmit() {
    this.submit = true;
    if (this.memberForm.valid) {
      this.memberService.addMemberToGroup(this.addGroupId, this.memberForm.getRawValue()).pipe(takeUntil(this.ngDestroyed$)).subscribe(
        () => this.exitModal()
        //TODO: Add error Handling
      );
    }
  }

}
