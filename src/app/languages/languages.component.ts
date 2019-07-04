import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: any = {};

  constructor(private languageService : LanguageService) { }

  ngOnInit() {
    this.languageService.getLanguages().subscribe(value=>{
      this.languages = value;
    });
  }

}
