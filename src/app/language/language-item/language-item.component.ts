import { Component, OnInit, Input } from '@angular/core';
import { Languages } from 'typings/Languages';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent implements OnInit {

  @Input() data:Languages;
  constructor() { }

  ngOnInit() {
  }

}
