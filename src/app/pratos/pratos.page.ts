import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformacoesModalComponent } from '../informacoes-modal/informacoes-modal.component';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
})
export class PratosPage implements OnInit {

  public retorno;
  constructor(private modalController: ModalController) {
   }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: InformacoesModalComponent,
      componentProps: {
        retorno: this.retorno
      }
    });

    return await modal.present();
  }
  public pratos = [
   {
     nome: 'Batata Frita',
     valor: 15.00,
     ingredientes: '500g de batata'
   },
   {
     nome: 'Polenta Frita',
     valor: 15.00,
     ingredientes: '500g de polenta'
   },
   {
     nome: 'Prato feito Carne',
     valor: 20.00,
     ingredientes: 'Arroz, Batata Frita, Feijão, Bife de Carne',
     sabores: ''
   },
   {
     nome: 'Prato feito Frango',
     valor: 20.00,
     ingredientes: 'Arroz, Salada, Feijão, Bife de Frango',
     sabores: ''
   },
   {
     nome: 'Prato feito Peixe',
     valor: 20.00,
     ingredientes: 'Arroz, Batata Frita, Salada, Peixe a milanesa',
     sabores: ''
   }
  ];

  public getBatata() {
    return this.retorno = this.lancheClicado(this.pratos[0]);
  }

  public getPolenta() {
    return this.retorno = this.lancheClicado(this.pratos[1]);
  }

  public getPratoCarne() {
    return this.retorno = this.lancheClicado(this.pratos[2]);
  }

  public getPratoFrango() {
    return this.retorno = this.lancheClicado(this.pratos[3]);
  }

  public getPratoPeixe() {
    return this.retorno = this.lancheClicado(this.pratos[4]);
  }

  public lancheClicado(lanche) {
    return lanche;
  }

}
