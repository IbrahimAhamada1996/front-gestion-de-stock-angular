import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCategorieComponent } from './categorie/create-categorie/create-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { UpdateCategorieComponent } from './categorie/update-categorie/update-categorie.component';
import {FormsModule} from '@angular/forms';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { CreateProduitComponent } from './produit/create-produit/create-produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategorieComponent,
    ListCategorieComponent,
    UpdateCategorieComponent,
    ListProduitComponent,
    CreateProduitComponent,
    UpdateProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
