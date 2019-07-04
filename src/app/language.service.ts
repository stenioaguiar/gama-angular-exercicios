import { Injectable } from '@angular/core';
import { Languages } from 'typings/Languages';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient: HttpClient) { }

  getLanguages() {
    return this.httpClient.get('http://localhost:3000/languages')
  }

  adicionarLanguage(language: Languages) {
    return this.httpClient.post('http://localhost:3000/languages',language);
  }
}
