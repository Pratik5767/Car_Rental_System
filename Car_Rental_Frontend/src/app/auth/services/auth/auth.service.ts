import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:9000";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    register(signUpRequest: any): Observable<any> {
        return this.http.post(BASIC_URL + "/api/auth/signup", signUpRequest);
    }

    login(loginRequest: any): Observable<any> {
        return this.http.post(BASIC_URL + "/api/auth/login", loginRequest);
    }
}