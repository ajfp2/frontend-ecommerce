import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

 

export const authGuard: CanActivateFn = (route, state) => {
    console.log('AuthGuard#canActivate comprobando acceso ...');
    const st = inject(UserStoreService);
    if(st.isLoggedIn()){
        console.log('AuthGuard#canActivate Acceso PERMITIDO');
        console.log("token", st.token);
        return true;
    } else {
        console.log('AuthGuard#canActivate Acceso denegado');
        inject(Router).navigate(['user', 'login']);
        return false;
    }    
};