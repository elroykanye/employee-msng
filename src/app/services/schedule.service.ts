import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Schedule} from '../models/schedule';

@Injectable({providedIn: 'root'})
export class ScheduleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.apiServerUrl}/schedule/all`);
  }

  public addSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(`${this.apiServerUrl}/schedule/add`, schedule);
  }

  public updateSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(`${this.apiServerUrl}/schedule/update`, schedule);
  }

  public deleteSchedule(scheduleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/schedule/delete/${scheduleId}`);
  }
}
