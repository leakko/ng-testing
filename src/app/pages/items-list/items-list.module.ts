import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'

import { ItemsListRoutingModule } from './items-list-routing.module';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    ItemsListRoutingModule,
    MatButtonModule
  ]
})
export class ItemsListModule { }
