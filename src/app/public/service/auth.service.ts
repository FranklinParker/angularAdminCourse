import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../models/register';
import {environment} from '../../../environments/environment';
import {Login} from '../models/login';
import {Observable} from 'rxjs';
import {User} from '../../interfaces/user';

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

  async user(): Promise<User>{
    const url = `${environment.api}/user`;
    return this.httpClient.get<User>(url, { withCredentials: true}).toPromise();

  }
  async logout(): Promise<void> {
    const url = `${environment.api}/logout`;
    try {
      await this.httpClient.post(url, {},
        {withCredentials: true}).toPromise();
    } catch (e) {
      console.log('e:' + e.message);
      throw e;
    }
  }

  updateInfo(user: User): Observable<User>{
    return this.httpClient.put<User>(`${environment.api}/users/info`, user);
  }
  updatePassword(data: any): Observable<User> {
    return this.httpClient.put<User>(`${environment.api}/users/password`, data);
  }
}
