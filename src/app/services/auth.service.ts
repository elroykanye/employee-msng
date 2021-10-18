import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginRequest, RegisterRequest} from '../models/requests/auth.request';

const AUTH_API = 'http://localhost:8080/api/auth/';
const SIGN_IN_ENDPOINT = 'signin';
const SIGN_UP_ENDPOINT = 'signup';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(
      // TODO check to be sure this endpoint is valid
      AUTH_API + SIGN_IN_ENDPOINT, {
        loginRequest
      }, httpOptions
    );
  }

  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post(
      AUTH_API + SIGN_UP_ENDPOINT, {
        registerRequest
      }, httpOptions
    );
  }
}
