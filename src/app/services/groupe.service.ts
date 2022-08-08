import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Groupes } from '../models/groupes';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private httpClient:HttpClient) { }

  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/groupes');
  }
  insert(donnees:Groupes)
  {
    return this.httpClient.post("http://127.0.0.1:8000/groupe",donnees);
  }

  delete(id:BigInt)
  {
    return this.httpClient.delete("http://127.0.0.1:8000/groupeDelete/"+id);
  }
}
