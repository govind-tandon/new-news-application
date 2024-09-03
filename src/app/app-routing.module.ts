import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { GlobalNewsComponent } from './screens/global-news/global-news.component';
import { LocalNewsComponent } from './screens/local-news/local-news.component';
import { AboutComponent } from './screens/about/about.component';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { LoginComponent } from './AuthGuard/login/login.component';

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
