import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLogInGuardService } from '../login/user-log-in-guard.service';
import { ChartersComponent } from './charters.component';
import { GroupDetailsComponent } from './group-details/group-details.component';

export const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ChartersComponent,
        canActivate: [UserLogInGuardService]
      },
      {
        path: 'details',
        component: GroupDetailsComponent,
        canActivate: [UserLogInGuardService]
      }
    ]
  }
]

export const charterRoutes: ModuleWithProviders = RouterModule.forChild(routes);
