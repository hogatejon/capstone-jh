import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
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
      {
        path: 'charters',
        loadChildren: () => import('./charters/charters.module').then(m => m.ChartersModule)
      },
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
