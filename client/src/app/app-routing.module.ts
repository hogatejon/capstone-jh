import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, CanActivate } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { charterRoutes } from './charters/charters-routing.module';
import { FishingOrgComponent } from './fishing-org/fishing-org.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLogInGuardService } from './shared/guards/user-log-in-guard.service';

const fallbackRoute: Route = {
  path: '**',
  component: FishingOrgComponent
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
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
