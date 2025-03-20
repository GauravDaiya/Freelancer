import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private UserSrv: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  Login() {
    const LoginData = this.LoginForm.value;
    const LoginObj = {
      userName : LoginData.username,
      password: LoginData.password
    }
    this.UserSrv.LoginUser(LoginObj).subscribe((LoginRes:any) => {
      console.log(LoginRes)
      alert(LoginRes.message);
      this.router.navigate(['/'])
    })
  }
}
