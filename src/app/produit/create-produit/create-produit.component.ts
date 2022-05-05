import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitServiceService } from '../../service/produit-service.service';
import { CategorieServiceService } from '../../service/categorie-service.service';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
  produit?: Produit
  categories:any;
  constructor(public produitService : ProduitServiceService,
              public router:Router,
              private categorieService: CategorieServiceService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  createProtuit(dataProduit: any){ 
      // parseInt(dataProduit.value.categorieId,10);
      this.produit = <Produit>(dataProduit.value);
      console.log(this.produit);
      console.log(dataProduit.value) 
    this.produitService.createProduit(this.produit).subscribe((data: {}) => {
      this.router.navigate(['/produit/list']);
    });
  }


   // Get Categorie list
   loadCategories() {
    return this.categorieService.getCagegories().subscribe((data: {}) => {
      this.categories = data;
    });
  }


}
