import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateurs } from '../models/formateurs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private httpClient:HttpClient) { }

  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/formateurs');
  }

  insert(donnees:Formateurs)
  {
    return this.httpClient.post("http://127.0.0.1:8000/formateur",donnees);
  }

  delete(id:BigInt)
  {
    return this.httpClient.delete("http://127.0.0.1:8000/formateurDelete/"+id);
  }
}
