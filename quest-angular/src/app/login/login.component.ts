import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    login: string;
    password: string; 

    constructor(private authService:AuthService){

    }

    connect(): void{
      this.authService.connection(this.login,this.password);
    }

    isConnected(): boolean{
      return this.authService.connected?true:false; 
    }

}
