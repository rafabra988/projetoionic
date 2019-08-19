import { Component, OnInit } from '@angular/core';
import { cliente } from '../models/cliente.model';
import { ClienteService } from '../service/cliente.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
