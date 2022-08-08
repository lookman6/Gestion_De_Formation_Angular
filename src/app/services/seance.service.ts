import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seances } from '../models/seances';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private httpClient: HttpClient) { }

  
  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/seances');
  }

  insert(donnees:Seances)
  {
    return this.httpClient.post("http://127.0.0.1:8000/seance",donnees);
  }

  delete(id:BigInt)
  {
    return this.httpClient.delete("http://127.0.0.1:8000/seanceDelete/"+id);
  }
}
