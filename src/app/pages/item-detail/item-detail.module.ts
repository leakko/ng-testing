import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


@NgModule({
  declarations: [
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    ItemDetailRoutingModule
  ]
})
export class ItemDetailModule { }
