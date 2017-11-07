import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from './../../models/item/item.module';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemListaPage');
  }

}
