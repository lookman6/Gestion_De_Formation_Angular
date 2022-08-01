import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salles } from '../models/salles';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private httpClient:HttpClient) { }

  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/salles');
  }

  insert(donnees:Salles)
  {
    return this.httpClient.post("http://127.0.0.1:8000/salle",donnees);
  }
}
