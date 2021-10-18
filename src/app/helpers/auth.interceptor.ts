import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private TOKEN_HEADER_KEY: 'Authorization';

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // get the HttpRequest object
    let authReq = request;

    // get the token from the Token Storage service
    const token = this.token.getToken();
    if (token != null) {
      // if token is not empty, clone with the required token info and
      authReq = request.clone({
        headers: request.headers.set(this.TOKEN_HEADER_KEY, 'Bearer' + token)
      });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
