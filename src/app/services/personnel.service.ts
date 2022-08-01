import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnels } from '../models/personnels';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private httpClient: HttpClient) { }

  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/personnels');
  }

  insert(donnees:Personnels)
  {
    return this.httpClient.post("http://127.0.0.1:8000/personnel",donnees);
  }
}
