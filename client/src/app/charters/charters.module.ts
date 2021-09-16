import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from '../shared/components/confirmation/confirmation.component';
import { SharedModule } from '../shared/shared.module';
import { AddCharterComponent } from './add-charter/add-charter.component';
import { AddMemberComponent } from './add-member/add-member.component';

import { charterRoutes } from './charters-routing.module';
import { ChartersComponent } from './charters.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { MemberComponent } from './group-details/member/member.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    charterRoutes
  ],
  declarations: [
    ChartersComponent,
    GroupComponent,
    GroupDetailsComponent,
    MemberComponent,
    AddCharterComponent,
    AddMemberComponent,
  ],
  exports: [
    ChartersComponent,
    GroupComponent,
    GroupDetailsComponent,
    MemberComponent
  ],
  providers: [
    ConfirmationComponent
  ]
})
export class ChartersModule {}
