import { GroupDetailsComponent } from '../group-details/group-details.component';
import { ChartersComponent } from './charters.component';

export const charterRoutes = [
  {
    path: 'charters',
    children: [
      {
        path: '',
        component: ChartersComponent,
        data: {
          breadcrumb: 'Charters'
        }
      },
      {
        path: 'details',
        component: GroupDetailsComponent,
        data: {
          breadcrumb: 'Charter Details'
        }
      }
    ]
  }
]
