/*
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserStoreService } from '../services/user-store.service';

export const articleAppInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('INTERCEPTING');
    const us = inject(UserStoreService);
    if (us.token != null) {
      console.log('INTERCEPTING, HAS TOKEN');
      const authReq = req.clone({
        headers: req.headers.set(
          'X-AUTH-HEADER',
          us.token
        )
      });
      console.log('Making an authorized request');
      req = authReq;
    }

    return next(req);
};*/

import { Injectable } from '@angular/core';
import { UserStoreService } from '../services/user-store.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleAppInterceptor implements HttpInterceptor {
    constructor(private userStore: UserStoreService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTING');
    if (this.userStore.token) {
        console.log('INTERCEPTING, HAS TOKEN');
        const authReq = req.clone({
        headers: req.headers.set(
            'X-AUTH-HEADER',
            this.userStore.token
        )
        });
        console.log('Making an authorized request');
        req = authReq;
    }
    return next.handle(req);
    }
}