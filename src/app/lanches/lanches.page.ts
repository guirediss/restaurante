import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lanches = [
    {
      nome: 'X-Salada',
      valor: 20.00
    },
    {
      nome: 'Cachorro Quente',
      valor: 15.00
    },
    {
      nome: 'Pizza',
      valor: 35.00
    },
    {
      nome: 'Calzone',
      valor: 10.00
    },
    {
      nome: 'Pastel',
      valor: 10.00
    }
  ];
}
