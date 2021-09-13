import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { GroupService } from '../charters/group.service';

@Component({
  selector: 'app-add-charter',
  templateUrl: './add-charter.component.html',
  styleUrls: ['./add-charter.component.scss']
})
export class AddCharterComponent implements OnInit, OnDestroy {

  @Output() modalClose = new EventEmitter<boolean>();

  charterForm: FormGroup
  fishingOrgs = ['Deep Sea', 'River', 'Lake', 'Small Creek', 'Ice', 'Inshore'];
  ngDestroyed$: Subject<boolean> = new Subject();
  submit: boolean = false;

  constructor(private readonly fb: FormBuilder,
              private readonly groupService: GroupService) { }

  ngOnInit(): void {
    this.buildCharterForm();
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
    });
  }

  onSubmit() {
    this.submit = true;
    console.log(this.charterForm.value);
    if (this.charterForm.valid) {
      this.groupService.addCharter(this.charterForm.getRawValue()).subscribe(() => {
        this.exitModal();
      });
    }
  }

}
