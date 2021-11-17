import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    ]
  }
]

export const loginRoutes: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
