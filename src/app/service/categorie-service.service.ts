import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
  apiURL = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCagegories():Observable<Categorie>{
    return this.http
               .get<Categorie>(this.apiURL+"/categories")
               .pipe(retry(1),catchError(this.handleError));
  }

  getCategorie(id:any):Observable<Categorie>{
    return this.http
               .get<Categorie>(this.apiURL+"/categories/"+id)
               .pipe(retry(1),catchError(this.handleError));
  }

  createCategorie(categorie:any):Observable<Categorie>{
    return this.http
            .post<Categorie>(this.apiURL+"/categories",JSON.stringify(categorie),this.httpOptions)
            .pipe(retry(1),catchError(this.handleError));
  }

  updateCategorie(id:any,categorie:any):Observable<Categorie>{
    return this.http
          .put<Categorie>(this.apiURL+"/categories/"+id,JSON.stringify(categorie),this.httpOptions)
          .pipe(retry(1),catchError(this.handleError));
  }

  deleteCategorie(id:any):Observable<Categorie>{
    return this.http
          .delete<Categorie>(this.apiURL+"/categories/"+id,this.httpOptions)
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
