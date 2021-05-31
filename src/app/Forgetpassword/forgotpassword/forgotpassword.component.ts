import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  hide=true
  forgetForm!: FormGroup;

    
  constructor(private formbuilder: FormBuilder ,private route:Router,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.forgetForm = this.formbuilder.group({

      email: ['', [Validators.required, Validators.email]],
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.forgetForm.controls[controlName].hasError(errorName);
  }

  forgetUser(forgetform:any) {
    let reqData = {
      email: forgetform.email,
      
    }
    console.log(reqData);
    this.userService.forgetUser(reqData).subscribe((res:any)=>{
      console.log(" Email send  successfully ",res);
      
    })
  }

}
