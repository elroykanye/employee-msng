import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DepartmentComponent } from './department.component';
import { DepartmentRoutingModule } from './department-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DepartmentRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DepartmentComponent ]
})
export class DepartmentModule { }

