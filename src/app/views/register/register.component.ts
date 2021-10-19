import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {RegisterRequest} from '../../models/requests/auth.request';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerRequest: RegisterRequest = {
    email: null,
    password: null,
    gender: null
  };

  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {email, password, gender} = this.registerRequest;

    // TODO confirm below method call works
    this.authService.register(this.registerRequest).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  repeatPasswordValid(pass: HTMLInputElement, repeatPass: HTMLInputElement) {
    return pass.value === repeatPass.value;
  }
}
