import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditItemListaPage } from './edit-item-lista';

@NgModule({
  declarations: [
    EditItemListaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditItemListaPage),
  ],
})
export class EditItemListaPageModule { }
