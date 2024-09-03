import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Navbar/about/home/home.component';
import { GlobalNewsComponent } from './Navbar/about/global-news/global-news.component';
import { LocalNewsComponent } from './Navbar/about/local-news/local-news.component';
import { AboutComponent } from './Navbar/about/about.component';
import { ContactUsComponent } from './Navbar/about/contact-us/contact-us.component';
import { LoginComponent } from './MainPage/login/login.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'global-news',
    component:GlobalNewsComponent
  },

  {
    path:'local-news',
    component:LocalNewsComponent
  },

  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'contact-us',
    component:ContactUsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
