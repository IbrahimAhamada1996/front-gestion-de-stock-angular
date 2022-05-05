import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { CreateCategorieComponent } from './categorie/create-categorie/create-categorie.component';
import { UpdateCategorieComponent } from './categorie/update-categorie/update-categorie.component';

import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { CreateProduitComponent } from './produit/create-produit/create-produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';

const routes: Routes = [
  {path: 'categorie/list',component:ListCategorieComponent},
  {path: 'categorie/add',component:CreateCategorieComponent},
  {path: 'categorie/edite/:id',component:UpdateCategorieComponent},

  {path: 'produit/list',component:ListProduitComponent},
  {path: 'produit/add',component:CreateProduitComponent},
  {path: 'produit/edite/:id',component:UpdateProduitComponent},

  {path: '',pathMatch:'full',redirectTo:'categorie/add'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
