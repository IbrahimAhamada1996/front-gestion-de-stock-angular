import { Categorie } from './categorie';
export interface Produit {
    id?: string;
    nom?: string;
    description?: string;
    prix?:number;
    categorieId?: number;
}
