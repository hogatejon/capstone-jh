import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MessageComponent } from './components/message/message.component';
import { CharterSearchPipe } from './pipes/charter-search.pipe';
import { OrgFilterPipe } from './pipes/org-filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { SpotsAvailablePipe } from './pipes/spots-available.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConfirmationComponent,
    LoaderComponent,
    MessageComponent,
    CharterSearchPipe,
    OrgFilterPipe,
    PhonePipe,
    SpotsAvailablePipe
  ],
  exports: [
    ConfirmationComponent,
    LoaderComponent,
    MessageComponent,
    CharterSearchPipe,
    OrgFilterPipe,
    PhonePipe,
    SpotsAvailablePipe
  ]
})

export class SharedModule {}
