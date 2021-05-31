import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder ,private route:Router,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginUser(loginform:any) {
    let reqData = {
      email: loginform.email,
      password: loginform.password

    }
    console.log(reqData);
    this.userService.loginnUser(reqData).subscribe((res:any)=>{
      console.log(" Login successfully ",res);
      localStorage.setItem('token',res['id']);
     // this.route.navigate(['dashboard'])
    })
  }

}