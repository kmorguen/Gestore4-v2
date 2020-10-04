import { AfficheProdService } from './service/AfficheProd.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AfficheProdService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
