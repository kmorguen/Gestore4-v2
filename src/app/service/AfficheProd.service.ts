import { PRODUITS } from '../content/produit/shared/produit-data';
import { Injectable } from '@angular/core'
import { Produit } from '../content/produit/shared/produit';
import { from } from 'rxjs';

@Injectable()
export class AfficheProdService {
    constructor() {}
  getProduits() {
    return PRODUITS;
  }
}