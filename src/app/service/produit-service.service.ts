import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  apiURL = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getProduits():Observable<Produit>{
    return this.http
               .get<Produit>(this.apiURL+"/produits")
               .pipe(retry(1),catchError(this.handleError));
  }

  getProduit(id:any):Observable<Produit>{
    return this.http
               .get<Produit>(this.apiURL+"/produits/"+id)
               .pipe(retry(1),catchError(this.handleError));
  }
  getProduitsIdCategorie(id:any):Observable<Produit>{
    return this.http
               .get<Produit>(this.apiURL+"/produits/"+id+"/categorie")
               .pipe(retry(1),catchError(this.handleError));
  }
  createProduit(produit:any):Observable<Produit>{
    return this.http
            .post<Produit>(this.apiURL+"/produits",JSON.stringify(produit),this.httpOptions)
            .pipe(retry(1),catchError(this.handleError));
  }

  updateProduit(id:any,produit:any):Observable<Produit>{
    return this.http
          .put<Produit>(this.apiURL+"/produits/"+id,JSON.stringify(produit),this.httpOptions)
          .pipe(retry(1),catchError(this.handleError));
  }

  deleteProduit(id:any):Observable<Produit>{
    return this.http
          .delete<Produit>(this.apiURL+"/produits/"+id,this.httpOptions)
          .pipe(retry(1),catchError(this.handleError));
  }



   // Error handling
   handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
