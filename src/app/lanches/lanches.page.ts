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
        retorno: this.retorno,
      }
    });

    return await modal.present();
  }
  public lanches = [
   {
     nome: 'X-Salada',
     valor: 20.00,
     ingredientes: 'Pão, Alface, Hambúrguer, Tomate, Maionese, Ketchup, Mostarda, Queijo',
     url: 'assets/img/xissalada.jpg'
   },
   {
     nome: 'Cachorro Quente',
     valor: 15.00,
     ingredientes: 'Pão, Salsicha, Cebola, Tomate, Milho, Ervilha, Batata Palha',
     url: 'assets/img/cachorroquente.jpg'
   },
   {
     nome: 'Pizza',
     valor: 35.00,
     ingredientes: '',
     sabores: '4Queijos, Calabresa, Frango',
     url: 'assets/img/pizza.jpeg'
   },
   {
     nome: 'Calzone',
     valor: 10.00,
     ingredientes: '',
     sabores: '4Queijos, Calabresa, Frango',
     url: 'assets/img/calzone.jpg'
   },
   {
     nome: 'Pastel',
     valor: 10.00,
     ingredientes: '',
     sabores: '4Queijos, Calabresa, Frango',
     url: 'assets/img/pastel.jpeg'
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
