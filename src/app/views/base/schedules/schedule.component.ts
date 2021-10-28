import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Schedule} from '../../../models/schedule';
import {ScheduleService} from '../../../services/schedule.service';

@Component({
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit {
  public schedules: Schedule[];
  public editSchedule: Schedule;
  public deleteSchedule: Schedule;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.getSchedules();
  }

  public getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(
      (response: Schedule[]) => {
        this.schedules = response;
        console.log(this.schedules);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddSchedule(addForm: NgForm): void {
    document.getElementById('add-schedule-form').click();
    this.scheduleService.addSchedule(addForm.value).subscribe(
      (response: Schedule) => {
        console.log(response);
        this.getSchedules();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateSchedule(schedule: Schedule): void {
    this.scheduleService.updateSchedule(schedule).subscribe(
      (response: Schedule) => {
        console.log(response);
        this.getSchedules();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSchedule(scheduleId: number): void {
    this.scheduleService.deleteSchedule(scheduleId).subscribe(
      (response: void) => {
        console.log(response);
        this.getSchedules();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchSchedules(key: string): void {
    console.log(key);
    const results: Schedule[] = [];
    for (const schedule of this.schedules) {
      if (schedule.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.startDate.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.finishDate.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.percentageComplete.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.scheduleStatus.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.observation.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.hrResult.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.supervisorResult.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.hrObservation.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.supervisorObservation.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || schedule.scheduleComplete.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(schedule);
      }
    }
    this.schedules = results;
    if (results.length === 0 || !key) {
      this.getSchedules();
    }
  }

  public onOpenModal(schedule: Schedule, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addScheduleModal');
    }
    if (mode === 'edit') {
      this.editSchedule = schedule;
      button.setAttribute('data-target', '#updateScheduleModal');
    }
    if (mode === 'delete') {
      this.deleteSchedule = schedule;
      button.setAttribute('data-target', '#deleteScheduleModal');
    }
    container.appendChild(button);
    button.click();
  }



}
