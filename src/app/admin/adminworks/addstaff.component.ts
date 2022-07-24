import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'addstaff',
  templateUrl: 'addstaff.component.html',
  styleUrls: ['./adminworks.component.css']
})
export class AddStaffComponent implements OnInit {

  url = "http://localhost:3004/staffrecords";
  constructor(private route: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  // form:null|any = new FormGroup({
  //   // nested formGroup
  //   account: new FormGroup({
  //       username:new FormControl('',
  //       Validators.required,
  //       // UsernameValidators.shouldBeUnique,
  //       // Validators.minLength(2),
  //       // Validators.maxLength(10), 
  //       // Validators.pattern('sk'),
        
  //       // Custom validators
  //       // UsernameValidators.cannotContainSpace,
  //       //  Asynchronous Validator
      

  //     ),
  //     password:new FormControl('',Validators.required)
  //     })
  //   })


    // login(){
    //     // this is for we connect server side
    //     let isValid = authService.login(this.form.value);
    //     if(!isValid){
    //       this.form.setError({
    //         invalidLogin:true
    //       })
    //     }
    //   }
    

      // put http
      
      saveform(val:HTMLInputElement){
        // let p = {title:val.value}
        // this.lists.splice(0,0,p);
        val.value=" ";
        this.http.post(this.url, val)
        .subscribe(data => {
          // console.log(data);
           
        }
        
        )
      }
}
