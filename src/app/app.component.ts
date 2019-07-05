import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gama-angular-exercicios';
  email = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  logout() {
    localStorage.removeItem('token');
    this.authService.setUser(null);
    this.router.navigateByUrl('/auth/login');
  }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.verifyToken(token)
      .subscribe( 
        (v:any) => {
        this.authService.setUser({
          email: v.users[0].email,
        });
      });
    }
    
    this.authService.currentUser.subscribe(v=> {
      if( v != null) {
        this.email = v.email;
        console.log(this.email);
      }
      else {
        this.email = '';
      }
    });
  }

}
