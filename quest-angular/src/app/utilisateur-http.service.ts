import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurHttpService {

  utilisateurs: Array<Utilisateur> = new Array<Utilisateur>;

  constructor(private http: HttpClient) { 

  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>("http://localhost:8888/utilisateur/" + id);
  }
  
}
