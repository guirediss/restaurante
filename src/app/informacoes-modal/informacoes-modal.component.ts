import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanchesPage } from '../lanches/lanches.page';

@Component({
  selector: 'app-informacoes-modal',
  templateUrl: './informacoes-modal.component.html',
  styleUrls: ['./informacoes-modal.component.scss'],
})
export class InformacoesModalComponent implements OnInit {

  lanches = new LanchesPage(this.modalController);
  public id = this.lanches.getId();
  public nomeLanche = this.lanches.lancheClicado(this.id);

  constructor(private modalController: ModalController) {
    console.log(this.nomeLanche);
   }

  ngOnInit() {
  }

  fecharModal() {
    this.modalController.dismiss();
  }
}
