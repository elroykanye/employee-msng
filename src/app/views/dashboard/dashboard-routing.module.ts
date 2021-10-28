import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
  children: [
  {
    path: '',
    redirectTo: 'Dashboard'
  },
    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Login Page'
      }
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
