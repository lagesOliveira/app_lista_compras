import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from './../../models/item/item.module';
import { ListaComprasService } from './../../services/lista-compras/lista-compras.service';
import { ToastService } from './../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-add-item-lista',
  templateUrl: 'add-item-lista.html',
})
export class AddItemListaPage {

  item: Item = {
    nome: ' ',
    quantidade: undefined
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private compras: ListaComprasService,
    private toastCtrl: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemListaPage');
  }
  addItem(item: Item) {
    this.compras.addItem(item).then(ref => {
      this.toastCtrl.show(`${item.nome}  adicionado!`)
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    })

  }
}
