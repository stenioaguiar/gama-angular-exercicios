import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private httpClient : HttpClient) { }

  getLanguages() {
    return this.httpClient.get('https://alefesouza.dev/gama/languages.php')
  }
}
