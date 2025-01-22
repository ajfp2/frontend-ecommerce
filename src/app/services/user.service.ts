import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelos/user';
import { Observable } from 'rxjs';


const server = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})

export class UserService {

    private user: User;

    constructor(private http:HttpClient) {
        console.log("Service USER constructor");        
    }

    login(user: User): Observable<any> {
        return this.http.post<User>(`${ server }/user/login`, user);
    }

    create(user: User): Observable<User> {
        return this.http.post<User>(`${ server }/user/register`, user);
    } 
}
