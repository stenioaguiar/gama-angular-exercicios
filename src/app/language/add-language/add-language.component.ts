import { Component, OnInit } from '@angular/core';
import { Languages } from 'typings/Languages';
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  language: Languages = {
    id: null,
    name: '',
    creator: '',
    year: 0
  };
  constructor(private languageservice: LanguageService, private router: Router) { }

  ngOnInit() {
  }

  enviar() {
    this.languageservice.adicionarLanguage(this.language).subscribe(value=> {
      alert('Todo adiconado com sucesso');
      this.router.navigateByUrl('/languages');
    });
  }
}
