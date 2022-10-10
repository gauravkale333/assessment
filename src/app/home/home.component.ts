import { Component, OnInit,ViewChild } from '@angular/core';
import { LogoutService } from './logout.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder } from '@angular/forms'


export interface hobbies {
    name: string;
  }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    hobbiesArray: hobbies[] = [];
    @ViewChild('chipList', { static: true }) chipList;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(private service: LogoutService, private router: Router,public fb: FormBuilder) { }
  
 
  ngOnInit(): void {
    this.detailForm = this.fb.group({
        name: [''],
        mobile: [''],
        address: [''],
        skills: [''],
        hobbies:[this.hobbiesArray],
        photo: [''],
      });
  }
  public logout():any{
    this.service.signout().subscribe((posRes)=>{
        if(posRes.logout === "success"){
            window.localStorage.removeItem("login_details"); 
            this.router.navigate(["/login"]);  
        }else{
            alert("Logout Fail");
        }
    },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
    });
};

onSubmit(){
    console.log(this.detailForm.value);
}
clear(){
    this.detailForm.reset();
}
add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
  
    if ((value || '').trim() && this.hobbiesArray.length < 5) {
      this.hobbiesArray.push({ name: value.trim() });
    }
   
    if (input) {
      input.value = '';
    }
  }

  remove(hobbies: hobbies): void {
    const index = this.hobbiesArray.indexOf(hobbies);
    if (index >= 0) {
      this.hobbiesArray.splice(index, 1);
    }
  }
}
