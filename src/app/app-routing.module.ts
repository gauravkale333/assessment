import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { UserComponent} from './user-component/user-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  {path: 'home', component:HomeComponent},
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
