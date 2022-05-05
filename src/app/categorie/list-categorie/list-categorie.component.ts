import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from '../../service/categorie-service.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  categories:any
  constructor(private categorieService: CategorieServiceService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  // Get Categorie list
  loadCategories() {
    return this.categorieService.getCagegories().subscribe((data: {}) => {
      this.categories = data;
    });
  }

   // Delete Categorie
   deleteCategorie(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.categorieService.deleteCategorie(id).subscribe((data) => {
        this.loadCategories();
      });
    }
  }

}
