import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CabinetExternes } from '../models/cabinet-externes';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor(private httpClient:HttpClient) { }

  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/cabinets');
  }

  insert(donnees:CabinetExternes)
  {
    return this.httpClient.post("http://127.0.0.1:8000/cabinet",donnees);
  }

  delete(id:BigInt)
  {
    return this.httpClient.delete("http://127.0.0.1:8000/cabinetDelete/"+id);
  }
}
