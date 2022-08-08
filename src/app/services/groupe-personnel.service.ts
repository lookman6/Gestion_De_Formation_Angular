import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupeUsers } from '../models/groupe-users';

@Injectable({
  providedIn: 'root'
})
export class GroupePersonnelService {

  constructor(private httpClient:HttpClient) { }

  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/groupePersonnels');
  }

  insert(donnees:GroupeUsers)
  {
    return this.httpClient.post("http://127.0.0.1:8000/groupePersonnel",donnees);
  }
}
