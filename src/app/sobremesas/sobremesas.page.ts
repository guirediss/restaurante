import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformacoesModalComponent } from '../informacoes-modal/informacoes-modal.component';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
})
export class SobremesasPage implements OnInit {

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
  public sobremesas = [
   {
     nome: 'Pudim',
     valor: 5.00,
     url: 'assets/img/pudim.jpg'
   },
   {
     nome: 'Sorvete',
     valor: 5.00,
     sabores: 'Chocolate, Morango, Uva, Limão',
     url: 'assets/img/sorvete.jpg'
   },
   {
     nome: 'Mousse',
     valor: 5.00,
     ingredientes: '',
     sabores: 'Maracuja, Morango',
     url: 'assets/img/mousse.jpg'
   },
   {
     nome: 'Gelatina',
     valor: 5.00,
     ingredientes: '',
     sabores: 'Abacaxi, Limão, Morango, Uva',
     url: 'assets/img/gelatina.jpg'
   },
   {
     nome: 'Sagu',
     valor: 5.00,
     ingredientes: 'Sagu, Suco de Uva',
     sabores: '',
     url: 'assets/img/sagu.jpeg'
   }
  ];

  public getPudim() {
    return this.retorno = this.lancheClicado(this.sobremesas[0]);
  }

  public getSorvete() {
    return this.retorno = this.lancheClicado(this.sobremesas[1]);
  }

  public getMousse() {
    return this.retorno = this.lancheClicado(this.sobremesas[2]);
  }

  public getGelatina() {
    return this.retorno = this.lancheClicado(this.sobremesas[3]);
  }

  public getSagu() {
    return this.retorno = this.lancheClicado(this.sobremesas[4]);
  }

  public lancheClicado(lanche) {
    return lanche;
  }
}
