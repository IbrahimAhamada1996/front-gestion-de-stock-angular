import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { CategorieServiceService } from '../../service/categorie-service.service';


@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
  categories = { id: '', libelle: '' };
  categorie?: Categorie
  constructor(public categorieService : CategorieServiceService,
              public router:Router,

              ) { }

  ngOnInit(): void {
  }

  createCategorie(dataCategorie: any){

    this.categorie = dataCategorie.value;

    this.categorieService.createCategorie(this.categorie).subscribe((data: {}) => {
      this.router.navigate(['/categorie/list']);
    });
  }
}
