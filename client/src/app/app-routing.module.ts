import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { charterRoutes } from './charters/charters-routing.module';
import { ChartersComponent } from './charters/charters.component';
import { FishingOrgComponent } from './fishing-org/fishing-org.component';
import { GroupDetailsComponent } from './group-details/group-details.component';

const fallbackRoute: Route = {
  path: '**',
  component: FishingOrgComponent
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: FishingOrgComponent,
        data: {
          breadcrumb: 'Home'
        }
      },
      ...charterRoutes,
      { path: 'about',
        component: AboutComponent,
        data: {
          breadcrumb: 'About'
        }
    },
      fallbackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
