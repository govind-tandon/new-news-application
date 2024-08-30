import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm:any
  registerForm:any
  activeForm:'login' | 'register' = 'login';
 
  constructor(
   private fb: FormBuilder,
   private router:Router,
   private snackBar:MatSnackBar){}
  ngOnInit(){
   this.loginForm = this.fb.group({
     email:['',[Validators.required, Validators.email]],
     password:['',Validators.required],
   })
 
   this.registerForm = this.fb.group({
     username:['', Validators.required],
     password:['', Validators.required],
     email:['',Validators.required],
   });
  }
 
  toggleForm(form:'login' | 'register'){
   this.activeForm = form;
  }
 
  login(){
   if (this.loginForm.valid){
     console.log("Login info ==>",this.loginForm.value);
     this.router.navigate(['budget-planner/dashboard']);
   }
   else{
     this.snackBar.open('Invalid email or password!','Close', { duration:3000 });
   }
  }
  register(){
   if(this.registerForm.valid){
     console.log("Register info==>>", this.registerForm.value);
     setTimeout(() => {
       window.location.reload();
     },2000);
     this.router.navigate(['budget-planner/login']);
   } else{
     this.snackBar.open('Please fill in all fields correctly', 'Close', { duration: 3000});
   }
  }
}
