import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from './../../models/item/item.model';
import { ListaComprasService } from './../../services/lista-compras/lista-compras.service';
import { ToastService } from './../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-item-lista',
  templateUrl: 'edit-item-lista.html',
})
export class EditItemListaPage {

  item: Item;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private compras: ListaComprasService,
    private toastCtrl: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.compras.editItem(item)
      .then(() => {
        this.toastCtrl.show(`${item.nome} atualizado!`);
        this.navCtrl.setRoot('HomePage');
      });
  }
  removeItem(item: Item) {
    this.compras.removeItem(item)
      .then(() => {
        this.toastCtrl.show(`${item.nome} foi apagado!`);
        this.navCtrl.setRoot('HomePage');
      })
  }
}
