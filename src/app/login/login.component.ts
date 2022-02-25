import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  form:null|any = new FormGroup({
        // nested formGroup
        account: new FormGroup({
        username:new FormControl('',
          
            Validators.required,
            // UsernameValidators.shouldBeUnique,
            // Validators.minLength(2),
            // Validators.maxLength(10), 
            // Validators.pattern('sk'),
            
            // Custom validators
            // UsernameValidators.cannotContainSpace,
            //  Asynchronous Validator
          
    
          ),
          password:new FormControl('',Validators.required)
          })
        })


        // login(){
        //     // this is for we connect server side
        //     let isValid = authService.login(this.form.value);
        //     if(!isValid){
        //       this.form.setError({
        //         invalidLogin:true
        //       })
        //     }
        //   }
        login(val:any,val2:any){
          // if(val == "sk" && val2 == 123){
          //      console.log(val,val2);
          //      return true;
          // }
          // else{
          //   this.form.setErrors({
          //     invalidLogin:true
          //   });
          //   return false;
          // }

          this.route.navigate(['/admin'],{
            queryParams:{page:1,order:'staff'}
          })
          }
}
