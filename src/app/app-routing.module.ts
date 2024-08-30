import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Navbar/about/home/home.component';
import { GlobalNewsComponent } from './Navbar/about/global-news/global-news.component';
import { LocalNewsComponent } from './Navbar/about/local-news/local-news.component';
import { AboutComponent } from './Navbar/about/about.component';
import { ContactUsComponent } from './Navbar/about/contact-us/contact-us.component';
import { LoginComponent } from './Navbar/about/login/login.component';

const routes: Routes = [
  {
    path:'home/:id',
    // path:'',
    component:HomeComponent
  },

  {
    path:'global-news/:id',
    component:GlobalNewsComponent
  },

  {
    path:'local-news/:id',
    component:LocalNewsComponent
  },

  {
    path:'about/:id',
    // path:'aboutId',
    component:AboutComponent
  },

  {
    path:'contact-us/:id',
    component:ContactUsComponent
  },

  {
    path:'login/:id',
    component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
