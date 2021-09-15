import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FishingOrgComponent } from './fishing-org/fishing-org.component';
import { OrganizationComponent } from './fishing-org/organization/organization.component';
import { ChartersComponent } from './charters/charters.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { GroupComponent } from './charters/group/group.component';
import { AddCharterComponent } from './add-charter/add-charter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ConfirmationComponent } from './shared/components/confirmation/confirmation.component';
import { MessageComponent } from './shared/components/message/message.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { MemberComponent } from './group-details/member/member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { PhonePipe } from './shared/pipes/phone.pipe';
import { CharterSearchPipe } from './shared/pipes/charter-search.pipe';
import { SpotsAvailablePipe } from './shared/pipes/spots-available.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FishingOrgComponent,
    OrganizationComponent,
    ChartersComponent,
    LoaderComponent,
    GroupComponent,
    AddCharterComponent,
    AboutComponent,
    ConfirmationComponent,
    MessageComponent,
    GroupDetailsComponent,
    MemberComponent,
    AddMemberComponent,
    PhonePipe,
    CharterSearchPipe,
    SpotsAvailablePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
