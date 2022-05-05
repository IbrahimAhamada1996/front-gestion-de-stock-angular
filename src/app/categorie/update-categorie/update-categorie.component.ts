import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from '../../service/categorie-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Categorie } from '../../model/categorie';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  categorie?:Categorie;
  constructor(private categorieService: CategorieServiceService,
              private router: Router,
              private activatedRoute : ActivatedRoute

    ) { }

  ngOnInit(): void {

    this.categorieService.getCategorie(this.id).subscribe((data) => {
      this.categorie = data
    })
  }

  // Update employee data
  editeCategorie(dataCategorie: any) {
    this.categorie = dataCategorie.value;
    if(window.confirm('Are you sure, you want to update?')){
      this.categorieService.updateCategorie(this.id,this.categorie).subscribe(data => {
        this.router.navigate(['/categorie/list'])
      })
    }
  }

}
