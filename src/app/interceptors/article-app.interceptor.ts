import { HttpInterceptorFn } from '@angular/common/http';

export const articleAppInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
