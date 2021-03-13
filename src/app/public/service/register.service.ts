import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private readonly httpClient: HttpClient) {
  }

  async register(register: Register): Promise<any> {
    const url = 'http://localhost:8000/api/users';
    try {
      const resp = await this.httpClient.post(url, {
        first_name: register.firstName,
        last_name: register.firstName,
        email: register.email,
        password: register.password,
        password_confirm: register.passwordConfirm

      }).toPromise();
      console.log('register', resp);
    } catch (e) {
      console.log('e:' + e.message);
    }
  }
}
