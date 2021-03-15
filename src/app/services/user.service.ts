import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async users(page: number): Promise<{data: User[]}>{
    const userResponse = await this.http.get<any>(`${environment.api}/users?page=${page}`).toPromise();
    return userResponse;
  }
}
