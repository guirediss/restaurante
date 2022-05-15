import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PratodiaComponent } from '../pratodia/pratodia.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pratoDia = [
    {
      pratoEntrada: 'Polenta',
      prato: 'Prato Feito Peixe',
      sobremesa: 'Sorvete'    
    }
  ];
  
  constructor(private modalController: ModalController) {}

  async abrirModal() {
    const modal = await this.modalController.create({
      component: PratodiaComponent,
      componentProps: {
        pratoDia: this.pratoDia
      }
    });

    return await modal.present();
  }

}
