import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ToastService } from './toast.service';

// interceptor service to handle requests to the API and catch errors
@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(public toastService: ToastService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        // a call to the show method of the ToastService
        // so that the error message gets displayed in the ToastComponent
        this.toastService.show(error.message);
        return throwError(() => error.message);
      })
    );
  }
}
