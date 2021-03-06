import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Charter } from '../../models/Charter';
import { MessageService } from '../../shared/components/message/message.service';
import { GroupService } from '../../services/group.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-charter',
  templateUrl: './add-charter.component.html',
  styleUrls: ['./add-charter.component.scss']
})
export class AddCharterComponent implements OnInit, OnDestroy {

  @Input() currentValue?: Charter
  @Input() isEdit?: boolean;
  @Output() modalClose = new EventEmitter<boolean>();

  charterForm: FormGroup
  fishingOrgs = ['Deep Sea', 'River', 'Lake', 'Small Creek', 'Ice', 'Inshore'];
  ngDestroyed$: Subject<boolean> = new Subject();
  submit: boolean = false;
  action: string = 'Add';

  constructor(private readonly fb: FormBuilder,
              private readonly groupService: GroupService,
              private readonly messageService: MessageService) { }

  ngOnInit(): void {
    this.buildCharterForm();
    if (this.currentValue) {
      this.charterForm.patchValue(this.currentValue);
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

  buildCharterForm() {
    this.charterForm = this.fb.group({
      'GroupName': [null, Validators.required],
      'SponsorName': [null, Validators.required],
      'SponsorPhone': [null, Validators.required],
      'SponsorEmail': [null, Validators.compose([Validators.email, Validators.required])],
      'OrganizationName': [null, Validators.required],
      'MaxGroupSize': [null, Validators.required]
    }, { updateOn: 'blur'});
  }

  onSubmit() {
    this.submit = true;
    if (this.charterForm.valid) {
      if (!this.currentValue) {
        this.groupService.addCharter(this.charterForm.getRawValue()).pipe(takeUntil(this.ngDestroyed$)).subscribe(() => {
          this.groupService.getAllCharters();
          this.messageService.showMessage('Group Added!', `You have successfully added ${this.charterForm.getRawValue().GroupName}`, 'success');
          this.exitModal();
        });
      } else {
        const appendId = this.charterForm.getRawValue();
        appendId.GroupId = this.currentValue.GroupId;
        this.groupService.editGroup(appendId).pipe(takeUntil(this.ngDestroyed$)).subscribe(() => {
          this.messageService.showMessage('Group Edited!', `You have successfully edited ${this.charterForm.getRawValue().GroupName}`, 'success');
          this.exitModal();
        });
      }
    } else {
      this.charterForm.markAllAsTouched();
      this.charterForm.markAsDirty();
      this.messageService.showMessage('Error', 'Please fill out whole form before submitting', 'error');
    }
  }

}
