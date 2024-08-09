import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GlobalNewsComponent } from './global-news/global-news.component';
import { LocalNewsComponent } from './local-news/local-news.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'home/:id',
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
export class AppRoutingModule { }
