import { GroupDetailsComponent } from '../group-details/group-details.component';
import { UserLogInGuardService } from '../login/user-log-in-guard.service';
import { ChartersComponent } from './charters.component';

export const charterRoutes = [
  {
    path: 'charters',
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
