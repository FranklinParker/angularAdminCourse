import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserResponse} from '../interfaces/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userApi = '${environment.api}/users';
  constructor(private http: HttpClient) { }
  async users(page: number): Promise<UserResponse>{
    const userResponse = await this.http.get<any>(`${this.userApi}?page=${page}`).toPromise();
    return userResponse;
  }

  delete(id: number): Observable<void>{
    return this.http.delete<any>(this.userApi);
  }
}
