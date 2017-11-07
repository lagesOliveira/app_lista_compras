import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from './../../models/item/item.module';
import { ListaComprasService } from './../../services/lista-compras/lista-compras.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private compras: ListaComprasService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemListaPage');
  }
  addItem(item: Item) {
    this.compras.addItem(item).then(ref => {
      console.log(ref.key)
      this.navCtrl.setRoot('HomePage', { key: ref.key })

    })

  }
}
