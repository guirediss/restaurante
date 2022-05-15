import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pratodia',
  templateUrl: './pratodia.component.html',
  styleUrls: ['./pratodia.component.scss'],
})
export class PratodiaComponent implements OnInit {
  pratoDia;
  constructor(private modalController: ModalController) {
    
   }

  ngOnInit() {
    console.log(this.pratoDia);
  }

  fecharModal() {
    this.modalController.dismiss();
  }
}
