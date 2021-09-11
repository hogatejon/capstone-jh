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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FishingOrgComponent,
    OrganizationComponent,
    ChartersComponent,
    LoaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
