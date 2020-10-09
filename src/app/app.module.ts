import { AfficheProdService } from './service/AfficheProd.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './content/produit/produit.component';
import { StockComponent } from './content/stock/stock.component';
import { SidebarComponent } from './content/partials/layout/sidebar/sidebar.component';
import { NavbarComponent } from './content/partials/layout/navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AccueilComponent } from './content/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    StockComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    DashboardComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AfficheProdService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
