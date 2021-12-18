import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    usname:'',
    password:''
  };
  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
userVerify(){
  alert("sucess")
  this.authservice.loginUser(this.user)
 .subscribe( res=>{
  if(res.token){
  localStorage.setItem('token',res.token)
  
  this.router.navigate(['welcome'])
  
  }
  if(res.token1){
    localStorage.setItem('token1',res.token1)
    localStorage.setItem('data',res.data._id)
    localStorage.setItem('name',res.data.name)
    this.router.navigate(['welcome'])
    console.log("user");
  }
  else if(res.error=="Invalid User"){
    alert("Invalid User")
  }
 else  if(res.error=="Invalid password"){
    alert("Invalid Password")
  }
  
})

}
}
