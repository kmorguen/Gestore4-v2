import { Produit } from './shared/produit';
import { AfficheProdService } from './../service/AfficheProd.service';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
 produits : Produit [] = []
  constructor(private afficheProdService : AfficheProdService) { 
    this.produits = this.afficheProdService.getProduits();
  }

  ngOnInit(): void {
    this.produits
  }

}
