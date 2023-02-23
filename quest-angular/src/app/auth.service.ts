import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from './model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connected: Utilisateur = null;
  constructor(private http: HttpClient, private router: Router) {
  }

  connection(login: string, password: string) {
    this.http.post("http://localhost:8888/utilisateur/auth/", {
      login: login,
      password: password
    }).subscribe((resp: any) => {
      this.connected = resp;
      if (this.connected) {
        if (this.connected.roles[0] == "STAGIAIRE") {
          this.router.navigate(['/accueilstagiaire',{id:this.connected.personne.id}])
        }
        if(this.connected.roles[0]=="FORMATEUR"){
          this.router.navigate(['/formateur',{id:this.connected.personne.id}])
        }
      }
    }
    )
  }

  disconnect() {
    this.connected = null;
  }

  checkUser(): Utilisateur {
    return this.connected;
  }
}
