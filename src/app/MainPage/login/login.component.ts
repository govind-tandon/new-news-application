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

