import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChartersComponent } from './charters/charters.component';
import { FishingOrgComponent } from './fishing-org/fishing-org.component';

const fallbackRoute: Route = {
  path: '**',
  component: FishingOrgComponent
}

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: FishingOrgComponent },
      { path: 'charters', component: ChartersComponent },
      { path: 'about', component: AboutComponent },
      fallbackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
