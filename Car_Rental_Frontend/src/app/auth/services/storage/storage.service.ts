import { Injectable } from '@angular/core';

const TOKEN = "token";
const USER = "user";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    static saveToken(token: string): void {
        window.localStorage.removeItem(TOKEN);
        window.localStorage.setItem(TOKEN, token);
    }

    static saveUser(user: any): void {
        window.localStorage.removeItem(USER);
        window.localStorage.setItem(USER, JSON.stringify(user));
    }

    static getToken(): string | null {
        return window.localStorage.getItem(TOKEN);
    }

    static getUser() {
        return JSON.parse(window.localStorage.getItem(USER) || '{}');
    }

    static getUserRole(): string {
        const user = this.getUser();
        if (user == null) {
            return "";
        }
        return user.role;
    }

    static isAdminLoggedIn(): boolean {
        if (this.getToken() == null) {
            return false;
        }
        return this.getUserRole() == "ADMIN"
    }

    static isCustomerLoggedIn(): boolean {
        if (this.getToken() == null) {
            return false;
        }
        return this.getUserRole() == "CUSTOMER";
    }

    static logOut(): void {
        window.localStorage.removeItem(TOKEN);
        window.localStorage.removeItem(USER);
    }
}