import { LoginComponent } from './content/login/login.component';
import { AccueilComponent } from './content/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './content/produit/produit.component';
import { StockComponent } from './content/stock/stock.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'accueil' , pathMatch : 'full'
  },,
  {
    path : 'accueil',
    component : AccueilComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'stock',
    component : StockComponent
  },
  {
    path : 'produit',
    component : ProduitComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
