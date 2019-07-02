import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador = 0;
  constructor() { }

  ngOnInit() {
  }

  increaseNumber() {
    this.contador ++;
  }

  decreaseNumber() {
    this.contador --;
  }

  resetNumber() {
    this.contador = 0;
  }

}
