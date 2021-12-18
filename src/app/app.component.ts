import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public _auth:AuthService,private router:Router){}
  logoutuser(){
    localStorage.removeItem('token1')
    this.router.navigate([''])
  
  }
}
