import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  SignUpForm!: FormGroup;

  constructor(
    private fb:FormBuilder,
    private UserSrv:UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.SignUpForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      policy: ['', [Validators.required]]
    })
  }

  SignUp() {
    // console.log(this.SignUpForm.value);
    const SignUpData = this.SignUpForm.value;
    const SignUpObj = {
      userName : SignUpData.fname,
      emailId: SignUpData.email,
      fullName: SignUpData.fname + ' ' + SignUpData.lname,
      password: SignUpData.password
    }

    this.UserSrv.registerUser(SignUpObj).subscribe((SignUpRes:any) => {
      console.log(SignUpRes);
      if(SignUpRes) {
        alert(SignUpRes.message);
        this.router.navigate(['/login'])
        this.SignUpForm.reset()
      }
    })
    console.log(SignUpObj)
  }
}
