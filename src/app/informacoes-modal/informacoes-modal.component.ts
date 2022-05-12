import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanchesPage } from '../lanches/lanches.page';

@Component({
  selector: 'app-informacoes-modal',
  templateUrl: './informacoes-modal.component.html',
  styleUrls: ['./informacoes-modal.component.scss'],
})
export class InformacoesModalComponent implements OnInit {


  lanches = LanchesPage;
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  fecharModal() {
    this.modalController.dismiss();
  }
}
