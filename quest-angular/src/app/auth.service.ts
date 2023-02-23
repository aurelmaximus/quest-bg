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
    let body = {
      login:login,
      password:password
    };
    this.http.post("http:localhost:8888/utilisateur/auth",body).subscribe((resp:any) => {
      this.connected = resp;
      console.log(resp);
    })
  }
}
