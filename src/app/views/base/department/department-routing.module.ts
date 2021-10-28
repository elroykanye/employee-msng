import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentComponent } from './department.component';

const routes: Routes = [
  {
    path: 'department',
    component: DepartmentComponent,
    data: {
      title: 'Department'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule {}
