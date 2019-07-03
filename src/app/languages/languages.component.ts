import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: any = {};

  constructor(private languagesService : LanguagesService) { }

  ngOnInit() {
    this.languagesService.getLanguages().subscribe(value=>{
      this.languages = value;
      console.log(value);
    });
  }

}
