import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formations } from '../models/formations';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient:HttpClient) { }

  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/formations');
  }

   insert(donnees:Formations)
  {
    return this.httpClient.post("http://127.0.0.1:8000/formation",donnees);
  }

  delete(id:BigInt)
  {
    return this.httpClient.delete("http://127.0.0.1:8000/formationDelete/"+id);
  }
}
