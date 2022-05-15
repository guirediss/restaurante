import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformacoesModalComponent } from '../informacoes-modal/informacoes-modal.component';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
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
  public bebidas = [
   {
     nome: 'Suco',
     valor: 5.00,
     ingredientes: '',
     sabores: 'Abacaxi, Laranja, Limão, Kiwi, Morango',
     url: 'assets/img/suco.jpg'
   },
   {
     nome: 'Refrigerantes',
     valor: 5.00,
     ingredientes: '',
     sabores: 'Coca-Cola, Fanta, Kuat, Sprite',
     url: 'assets/img/refri.jpeg'
   },
   {
     nome: 'Agua',
     valor: 5.00,
     ingredientes: '',
     sabores: '',
     url: 'assets/img/agua.webp'
   },
   {
     nome: 'Cerveja',
     valor: 5.00,
     ingredientes: '',
     sabores: 'Brahma, Skol, Heineken',
     url: 'assets/img/cerveja.webp'
   },
   {
     nome: 'Vinho',
     valor: 10.00,
     ingredientes: '',
     sabores: 'Vinho Tinto Seco, Vinho Tinto Suave, Vinho Branco Seco, Vinho Branco Suave',
     url: 'assets/img/vinho.jpg'
   }
  ];

  public getSuco() {
    return this.retorno = this.lancheClicado(this.bebidas[0]);
  }

  public getRefrigerantes() {
    return this.retorno = this.lancheClicado(this.bebidas[1]);
  }

  public getAgua() {
    return this.retorno = this.lancheClicado(this.bebidas[2]);
  }

  public getCerveja() {
    return this.retorno = this.lancheClicado(this.bebidas[3]);
  }

  public getVinho() {
    return this.retorno = this.lancheClicado(this.bebidas[4]);
  }

  public lancheClicado(lanche) {
    return lanche;
  }

}
