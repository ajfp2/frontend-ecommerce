import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelos/user';
import { map, Observable } from 'rxjs';
import { UserStoreService } from './user-store.service';


const server = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})

export class UserService {

    private user: User;

    constructor(private http:HttpClient, private st: UserStoreService) {
        console.log("Service USER constructor");        
    }

    login(user: User): Observable<any> {
        return this.http.post<User>(`${ server }/user/login`, user).pipe(
            map((resp: any) => {
                this.st.user = user.username;
                this.st.token = resp.token;
                return resp;
            })
        );
    }

    create(user: User): Observable<User> {
        return this.http.post<User>(`${ server }/user/register`, user);
    } 
}
