import { Component, OnInit,ViewChild } from '@angular/core';
import { LogoutService } from './logout.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'


// tslint:disable-next-line: class-name
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
    detailForm: FormGroup;
    @ViewChild('chipList', { static: true }) chipList;
    hobbiesArray: hobbies[] = [];
    uploadReset:boolean;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(private service: LogoutService, private router: Router, public fb: FormBuilder) { }
  ngOnInit(): void {
    this.detailForm = this.fb.group({
        name: ['', [Validators.required]],
        mobile: ['', [Validators.required]],
        address: ['', [Validators.required]],
        skills: [''],
        hobbies:[ this.hobbiesArray],
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

// tslint:disable-next-line: typedef
onSubmit(){
    console.log("detailForm values",this.detailForm.value);
}
clear(){
    this.detailForm.reset();
    this.uploadReset = true;
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
