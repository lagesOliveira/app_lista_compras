import { Injectable } from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './../../models/item/item.module';

@Injectable()
export class ListaComprasService {

    private listaComprasRef = this.db.list<Item>('lista-compras')

    constructor(private db: AngularFireDatabase) { }

    getListaCompras() {
        return this.listaComprasRef;
    }

    addItem(item: Item) {
        return this.listaComprasRef.push(item);
    }

    editItem(item: Item) {
        return this.listaComprasRef.update(item.key, item);
    }

    removeItem(item: Item) {
        return this.listaComprasRef.remove(item.key);
    }
}