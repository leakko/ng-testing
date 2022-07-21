import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { HomeComponent } from './pages/home/components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'items-list',
    loadChildren: () =>
      import('./pages/items-list/items-list.module').then(
        (m) => m.ItemsListModule
      ),
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
