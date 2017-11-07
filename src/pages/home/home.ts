import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { Item } from './../../models/item/item.model';
import { ListaComprasService } from './../../services/lista-compras/lista-compras.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaCompras$: Observable<Item[]>
  
  constructor(public navCtrl: NavController, private compras: ListaComprasService) {

    this.listaCompras$ = this.compras
    .getListaCompras()
    .snapshotChanges()
    .map(
      adds => {
        return adds.map( c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    )

  }

}
