import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../../service/produit-service.service';
import { CategorieServiceService } from '../../service/categorie-service.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

   produits:any;
   categorie:any;
   id:any;
  constructor(private produitService: ProduitServiceService,private categorieService:CategorieServiceService) { }

  ngOnInit(): void {
    this.loadProduits();
    // this.produitCategorie();
  }

  // Get produits list
  loadProduits() {
    return this.produitService.getProduits().subscribe((data: {}) => {
      this.produits = data;
    });
  }

  produitCategorie(id:any) {
     this.produitService.getProduitsIdCategorie(id).subscribe((data: {}) => {
      this.categorie = data;
    });
    return this.categorie;
  }

   // Delete produits
   deleteProduit(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.produitService.deleteProduit(id).subscribe((data) => {
        this.loadProduits();
      });
    }
  }

}
