import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../models/register';
import {environment} from '../../../environments/environment';
import {Login} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) {
  }

  async register(register: Register): Promise<any> {
    const url = `${environment.api}/register`;
    try {
      const resp = await this.httpClient.post(url, {
        first_name: register.firstName,
        last_name: register.firstName,
        email: register.email,
        password: register.password,
        passwordConfirm: register.passwordConfirm

      }).toPromise();
      console.log('register', resp);
    } catch (e) {
      console.log('e:' + e.message);
      throw e;
    }
  }

  async login(login: Login): Promise<any> {
    const url = `${environment.api}/login`;
    try {
      const resp = await this.httpClient.post(url, login,
        {withCredentials: true}).toPromise();
      console.log('register', resp);
    } catch (e) {
      console.log('e:' + e.message);
      throw e;
    }
  }
}
