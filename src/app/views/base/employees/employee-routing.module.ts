import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmployeeComponent} from './employee.component';

const routes: Routes = [
  {
    path: 'base/employee',
    component: EmployeeComponent,
    data: {
      title: 'All Employees'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
