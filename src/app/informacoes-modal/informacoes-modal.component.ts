import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-informacoes-modal',
  templateUrl: './informacoes-modal.component.html',
  styleUrls: ['./informacoes-modal.component.scss'],
})
export class InformacoesModalComponent implements OnInit {
  retorno;

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    console.log(this.retorno)
  }

  fecharModal() {
    this.modalController.dismiss();
  }
}
