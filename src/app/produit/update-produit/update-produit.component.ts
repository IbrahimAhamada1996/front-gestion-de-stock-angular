import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../../service/produit-service.service';
import { CategorieServiceService } from '../../service/categorie-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Produit } from '../../model/produit';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  id = this.activatedRoute.snapshot.params['id'];
  produit?:Produit;
  categories:any;
  constructor(private produitService: ProduitServiceService,
              private router: Router,
              private activatedRoute : ActivatedRoute,
              private categorieService: CategorieServiceService

    ) { }

  ngOnInit(): void {

    this.produitService.getProduit(this.id).subscribe((data) => {
      this.produit = data
    })
  }

   // Get Categorie list
   loadCategories() {
    return this.categorieService.getCagegories().subscribe((data: {}) => {
      this.categories = data;
    });
  }

  // Update employee data
  editeProduit(dataProduit: any) {
    this.produit = dataProduit.value;
    // if(window.confirm('Are you sure, you want to update?')){
      this.produitService.updateProduit(this.id,this.produit).subscribe(data => {
        this.router.navigate(['/produit/list'])
      })
    // }
  }

}
