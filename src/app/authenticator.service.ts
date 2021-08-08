import {Injectable} from '@angular/core';
import {User} from "./model/User";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor() {
  }

  storeUser(user: User) {
    localStorage.setItem("id", user.id);
    localStorage.setItem("username", user.username);
    localStorage.setItem("role", user.role);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("username") != null;
  }

  isLoggedAs(role: string): boolean {
    return this.isLoggedIn() && localStorage.getItem("role") != null && localStorage.getItem("role") == role;
  }

  getLoggedUser(): User {
    return new User(
      localStorage.getItem("id")!,
      localStorage.getItem("username")!,
      localStorage.getItem("password")!
    )
  }
}
