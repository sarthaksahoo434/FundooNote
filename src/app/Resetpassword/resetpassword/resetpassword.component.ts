import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  hide=true
  resetForm!: FormGroup;

  constructor(private formbuilder: FormBuilder ,private route:Router,private userService:UserserviceService) { }

  ngOnInit(): void {

    this.resetForm = this.formbuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]],
      cpassword:['',Validators.required]
    },{ validator: this.checkPasswords });

  }
  checkPasswords(group: FormGroup) { 

    let pass = group.controls.password.value;
    let confirmPass = group.controls.cpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
  public hasError=(controlName:string,errorName:string)=>{
    return this.resetForm.controls[controlName].hasError(errorName);
  }
 resetUser = (resetForm: { email: any; password: any;}) => {
    try {
      let reUser = {
        
        Email: resetForm.email,
        Password: resetForm.password,
      
         }
         this.userService.resetUser(reUser).subscribe((response:any) => {
          console.log("Password change sucessfully", response);
        })
         
        
      } catch (error) {
        console.log(error);
  
      }
    } 
}



