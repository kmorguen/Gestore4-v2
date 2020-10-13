import { PRODUITS } from '../content/produit/shared/produit-data';
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../content/produit/shared/produit'
@Injectable()
export class AfficheProdService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:53877/api/workouts';
    constructor(private http: HttpClient, private produit : Produit) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
    public get() {
      return this.http.get(this.accessPointUrl, {headers: this.headers});
    }
  
    public add(produit) {
      return this.http.post(this.accessPointUrl, produit, {headers: this.headers});
    }
  
    public remove(produit) {
      return this.http.delete(this.accessPointUrl + '/' + produit.id, {headers: this.headers});
    }
  
    public update(produit) {
      return this.http.put(this.accessPointUrl + '/' + produit.id, produit, {headers: this.headers});
    }
}