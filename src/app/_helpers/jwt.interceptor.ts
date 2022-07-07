import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = this.authenticationService.userValue;
    const isLoggedIn = user && user.token;

    if (isLoggedIn) {
      console.log('Intercepting Request');
      request = request.clone({
        setHeaders: {
          Authorization: `${user.token}`,
          //TODO: Authorization:`Testing Purpose`
        },
      });
    }

    return next.handle(request);
  }
}
