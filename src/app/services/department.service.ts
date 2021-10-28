import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../models/department';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class DepartmentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiServerUrl}/department/all`);
  }

  public addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.apiServerUrl}/department/add`, department);
  }

  public updateDepartment(department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiServerUrl}/department/update`, department);
  }

  public deleteDepartment(departmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/department/delete/${departmentId}`);
  }
}
