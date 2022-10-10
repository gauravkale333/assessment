import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user-component/user-component.component';
import { LoginComponent } from './login-component/login.component';
import { CustomMaterialModule } from './custome-material-module/custome-material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TokenModule } from './token/token.module';
//import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    //ToastrModule.forRoot(),
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    TokenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
