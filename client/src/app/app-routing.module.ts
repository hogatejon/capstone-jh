import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
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
      fallbackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
