import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginComponent:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      // console.log("User id is :",this.route.snapshot.paramMap.get('id'));
      this.route.paramMap.subscribe(params => {
        this.loginComponent = params.get('id');
        console.log("Login id is :", this.loginComponent);
      });
  }
}
