import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-prof',
  templateUrl: './cad-prof.page.html',
  styleUrls: ['./cad-prof.page.scss'],
})
export class CadProfPage {

  private pais;

  constructor() { 
    this.pais = [
      {"nome" : "chrome lixo", "pq": "pq sim"},
      {"nome" : "vs tb", "pq": "pq sim"},
      {"nome" : "GOOGLE LIXO", "pq": "pq sim"},
      {"nome" : "MICROSOFT TB", "pq": "pq sim"}
    ]
   }



}
