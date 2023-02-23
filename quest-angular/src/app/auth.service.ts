import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connected: Utilisateur = null;
  constructor(private http: HttpClient) { 
  }

  connection(login:string,password:string){
    this.http.post("http://localhost:8888/utilisateur/auth/", {
      login:login,
      password:password
    }).subscribe((resp:any) => {
      this.connected = resp;
    })
  }

  disconnect(){
    this.connected=null;
  }
}
