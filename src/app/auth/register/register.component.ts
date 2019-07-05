import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login: string = '';
  senha: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  enviar() {
    console.log(this.login + '' + this.senha);
    this.authService.createAccount(this.login, this.senha)
    .subscribe(value => {
      alert('Usuário criado com sucesso');
      console.log(value);
    })
  }

}
