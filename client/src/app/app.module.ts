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
import { LoaderComponent } from './loader/loader.component';
import { GroupComponent } from './charters/group/group.component';
import { AddCharterComponent } from './add-charter/add-charter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';
import { MessageComponent } from './shared/message/message.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { MemberComponent } from './group-details/member/member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { PhonePipe } from './shared/phone.pipe';

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
    PhonePipe
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
