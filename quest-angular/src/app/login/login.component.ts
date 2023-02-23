import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {

  }

  connect(): void {
    this.authService.connection(this.login, this.password);
    let currentUser = this.authService.checkUser();
    console.log(currentUser);
    if (currentUser) {
      console.log("in b4");
      if (currentUser.roles[0] == "STAGIAIRE") {
        console.log("in");
        this.router.navigate(['/acceuilstagiaire',{id: currentUser.personne.id}]);
      }
    }
  }

  isConnected(): boolean {
    return (this.authService.checkUser()?true:false)
  }
}
