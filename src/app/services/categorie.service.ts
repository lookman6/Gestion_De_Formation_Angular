import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient:HttpClient) { }

  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/categories');
  }

  insert(donnees:Categories)
  {
    return this.httpClient.post("http://127.0.0.1:8000/categorie",donnees);
  }

  delete(id:BigInt)
  {
    return this.httpClient.delete("http://127.0.0.1:8000/categorieDelete/"+id);
  }
}
