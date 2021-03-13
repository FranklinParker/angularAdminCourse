import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../models/register';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

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
}
