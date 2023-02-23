import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private authService:AuthService){
  }

  boutonDeco():boolean{
    return((this.authService.connected)?true:false)
  }

  deco():void{
    this.authService.disconnect();
  }
}
