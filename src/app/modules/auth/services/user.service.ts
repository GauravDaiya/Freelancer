import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Constant } from '../../../core/constants/master';
import { Observable } from 'rxjs';
import { IuserRegister } from '../../../core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(data:IuserRegister) {
    return this.http.post(environment.API_URL + Constant.API_METHOD_NAME.CREATE_USER,data)
  }

  LoginUser(data:any) {
    return this.http.post(environment.API_URL + Constant.API_METHOD_NAME.LOGIN_USER,data)
  }
}
