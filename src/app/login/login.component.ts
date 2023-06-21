import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string="";

  constructor(private fb:FormBuilder,private router: Router) { }

  loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  login(){
    const username = this.loginForm.value.username;
  const password = this.loginForm.value.password;
  if(username=="admin"&&password=="admin1"){
    this.router.navigate(['/DashboardComponent']);
  }else{
    this.error='Username or Password is wrong!';
  }

  }
  ngOnInit(): void {
 
  }

}
