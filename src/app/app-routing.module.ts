import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminworksComponent } from './admin/adminworks/adminworks.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import {LoginComponent} from './login/login.component';
// import {LoginRoutingModule} from './login/login-routing.module'

const routes: Routes = [
  // {path:"",component:AppComponent},
  {path: '',component:HomeComponent},
  {path: 'admin',component:AdminworksComponent},
  {path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
