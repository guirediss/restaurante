import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformacoesModalComponent } from '../informacoes-modal/informacoes-modal.component';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {
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
  public lanches = [
   {
     nome: 'X-Salada',
     valor: 20.00,
     ingredientes: 'Pão, Alface, Hambúrguer, Tomate, Maionese, Ketchup, Mostarda, Queijo'
   },
   {
     nome: 'Cachorro Quente',
     valor: 15.00,
     ingredientes: 'Pão, Salsicha, Cebola, Tomate, Milho, Ervilha, Batata Palha'
   },
   {
     nome: 'Pizza',
     valor: 35.00,
     ingredientes: '',
     sabores: '4Queijos, Calabresa, Frango'
   },
   {
     nome: 'Calzone',
     valor: 10.00,
     ingredientes: '',
     sabores: '4Queijos, Calabresa, Frango'
   },
   {
     nome: 'Pastel',
     valor: 10.00,
     ingredientes: '',
     sabores: '4Queijos, Calabresa, Frango'
   }
  ];

  public getXis() {
    return this.retorno = this.lancheClicado(this.lanches[0]);
  }

  public getCachorro() {
    return this.retorno = this.lancheClicado(this.lanches[1]);
  }

  public getPizza() {
    return this.retorno = this.lancheClicado(this.lanches[2]);
  }

  public getCalzone() {
    return this.retorno = this.lancheClicado(this.lanches[3]);
  }

  public getPastel() {
    return this.retorno = this.lancheClicado(this.lanches[4]);
  }

  public lancheClicado(lanche) {
    return lanche;
  }




}
