import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email, password) {
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBhMnkDVGGj5UKhiE7APjdADNLsuS8ENr8', {
      email,
      password,
    });
  }
  
  createAccount(email, password) {
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBhMnkDVGGj5UKhiE7APjdADNLsuS8ENr8', {
      email,
      password,
    });
  }

  logout() {

  }

  setUser(user) {
    this.pUser.next(user);
  }

  verifyToken(token) {
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyBhMnkDVGGj5UKhiE7APjdADNLsuS8ENr8', {
      idToken: token
    })
  }
}
