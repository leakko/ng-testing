import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ItemsListComponent},
  {path: ':name', loadChildren: () => import('../item-detail/item-detail.module').then(m => m.ItemDetailModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsListRoutingModule { }
