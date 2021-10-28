import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ScheduleComponent} from './schedule.component';
import {ScheduleService} from '../../../services/schedule.service';

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [ScheduleService],
  bootstrap: [ScheduleComponent]
})
export class ScheduleModule { }
