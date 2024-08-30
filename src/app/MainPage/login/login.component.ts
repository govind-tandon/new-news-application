import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  Validators,
  FormGroup
} from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  })
  text = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required], );
  router: any;
  snackBar: any;

  // from codefusionhub video, switch between login and register form
  toggleForm(form:'login' | 'register'){
    this.activeForm = form;
   }

  // loginForm: any | undefined | undefined;
  registerForm:any
  activeForm:'login' | 'register' = 'login';

  login(){
    if (this.loginForm.valid){
      console.log("Login info ==>",this.loginForm.value);

      // Navigate to dashboard or any page after successful login
      this.router.navigate(['MainPage/dashboard']);
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

      // Navigate to login after successful registration
      this.router.navigate(['MainPage/dashboard/login']);
    } else{
      this.snackBar.open('Please fill in all fields correctly', 'Close', { duration: 3000});
    }
   }

  // From here API starts :-
  users:any;
  constructor(private userData:UserDataService) {}
  // Here API stops

  getErrorMessage() {
    if (this.text.hasError('required')) {
      return 'You must enter a value';
    }

    return this.text.hasError('text') ? 'Not a valid text' : '';
  }

  // getPasswordErrorMessage() {
  //   const passwordControl = this.get('password');
  //   if (passwordControl?.hasError('required')) {
  //     return 'You must enter a password';
  //   }
  //   if (passwordControl?.hasError('invalidPassword')) {
  //     return 'Password must be at least 8 characters long, with at least one letter and one number';
  //   }
  //   return '';
  // }
  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    if (this.password.hasError('invalidPassword')) {
      return 'Password must be at least 8 characters long, with at least one letter and one number';
    }
    return '';
  }
  
  loginUser(){
    console.log(this.loginForm.value)
  }

  // userLogin(item:any){
  //   console.log(item);
  // }


  // API starts : from here
  userLogin(data:any){
    // console.log(data);
    this.userData.saveUsersData(data).subscribe((result) => {
      // this.users = result;
      console.log(result);
    });
  }
}




