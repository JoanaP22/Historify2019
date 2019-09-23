import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.css']
})
export class SugestoesComponent implements OnInit {

  //declaração das variaveis dos inputs

  localName: '';
  localYear: number;
  localLat: number;
  localLong: number;
  localPropr = '';
  localHistory = '';
  localOtherInfo = '';

  constructor() { }

  ngOnInit() {
  }

}
