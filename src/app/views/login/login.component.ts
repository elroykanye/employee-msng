import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../models/requests/auth.request';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit {
  loginRequest: LoginRequest = {
    email: null,
    password: null
  };

  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];

  constructor(
    // private authService: AuthService
  ) {}

  ngOnInit(): void {
  }
}
