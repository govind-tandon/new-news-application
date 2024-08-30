import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './MainPage/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './Navbar/about/home/home.component';
import { GlobalNewsComponent } from './Navbar/about/global-news/global-news.component';
import { LocalNewsComponent } from './Navbar/about/local-news/local-news.component';
import { AboutComponent } from './Navbar/about/about.component';
import { ContactUsComponent } from './Navbar/about/contact-us/contact-us.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Subpage1Component } from './MainPage/Body/subpage1/subpage1.component';
import { HeaderComponent } from './MainPage/header/header.component';
import { MainContentComponent } from './MainPage/main-content/main-content.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './MainPage/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // RegistrationComponent,
    HomeComponent,
    GlobalNewsComponent,
    LocalNewsComponent,
    AboutComponent,
    ContactUsComponent,
    FooterComponent,
    Subpage1Component,
    HeaderComponent,
    MainContentComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    // MatSnackBar,
    MatSnackBarModule,
    // CommonModule
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
