import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../custome-material-module/custome-material-module.module';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { LogoutService } from '../home/logout.service'
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  showSpinner: boolean = false;
  

  constructor(private router: Router, private authService: LogoutService,public service: LoginService ) {    
   }
loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.authService.signout();
  }

login(): void {
  console.log(this.loginForm.controls.username.value,'login form')
  if (this.loginForm.status == "VALID") {
    this.service.signin({'uname': this.loginForm.controls.username.value,
    'upwd':this.loginForm.controls.password.value}).subscribe((posRes) => {
      if (posRes.login === 'success') {
          window.localStorage.setItem('login_details', JSON.stringify(posRes));
          //this.showSpinner = true;
          this.router.navigate(['/home']);
      }
      if (posRes.login === 'fail') {
        alert("login failed")
        this.router.navigate(['/login']);
      }
  }, (errRes: HttpErrorResponse) => {
    this.showSpinner = false;
    alert(errRes);
  });
  }
  
  // if (this.loginForm.controls.username.value == 'admin' && this.loginForm.controls.password.value == 'admin'){
  //     this.showSpinner = true;
  //     this.router.navigate(['user']);
  //   }else {
  //     this.showSpinner = false;
  //     alert('Invalid credentials');
  //   }
  }
  clear(){
    // this.loginForm = '';
    this.loginForm.reset();
    this.showSpinner = false;
  }
  }