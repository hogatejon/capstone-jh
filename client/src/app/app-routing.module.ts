import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, CanActivate } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { charterRoutes } from './charters/charters-routing.module';
import { FishingOrgComponent } from './fishing-org/fishing-org.component';
import { LoginComponent } from './login/login.component';
import { UserLogInGuardService } from './login/user-log-in-guard.service';

const fallbackRoute: Route = {
  path: '**',
  component: LoginComponent
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'home',
        component: FishingOrgComponent,
        canActivate: [UserLogInGuardService],
      },
      ...charterRoutes,
      { path: 'about',
        component: AboutComponent,
        canActivate: [UserLogInGuardService]
    },
      fallbackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
