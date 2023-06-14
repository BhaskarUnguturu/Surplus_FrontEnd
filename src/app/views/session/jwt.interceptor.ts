import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const token = localStorage.getItem('fwmUserToken');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'authorization': `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}