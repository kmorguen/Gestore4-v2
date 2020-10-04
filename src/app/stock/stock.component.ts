import { Produit } from './../produit/shared/produit';
import { AfficheProdService } from './../service/AfficheProd.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  
  produits : Produit [] = []
  constructor(private afficheProdService : AfficheProdService) { 
    this.produits = this.afficheProdService.getProduits();
  }

  ngOnInit(): void {
    this.produits
  }
}
