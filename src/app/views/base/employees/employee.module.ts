import {NgModule} from '@angular/core';
import {EmployeeComponent} from './employee.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from '../../../services/employee.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule { }
