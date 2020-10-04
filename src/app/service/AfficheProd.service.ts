import { PRODUITS } from './../produit/shared/produit-data';
import { Injectable } from '@angular/core'
import { Produit } from './../produit/shared/produit';
import { from } from 'rxjs';

@Injectable()
export class AfficheProdService {
    constructor() {}
  getProduits() {
    return PRODUITS;
  }
}