import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path : '',
    component : ProduitComponent
  },
  {
    path : '/stock',
    component : StockComponent
  },
  {
    path : '/produit',
    component : ProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
