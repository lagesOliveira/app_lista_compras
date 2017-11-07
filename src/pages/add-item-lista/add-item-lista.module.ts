import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemListaPage } from './add-item-lista';

@NgModule({
  declarations: [
    AddItemListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemListaPage),
  ],
})
export class AddItemListaPageModule {}
