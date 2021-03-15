import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserResponse} from '../interfaces/UserResponse';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userApi = `${environment.api}/users`;
  constructor(private http: HttpClient) { }
  async users(page: number): Promise<UserResponse>{
    const userResponse = await this.http.get<any>(`${this.userApi}?page=${page}`).toPromise();
    return userResponse;
  }

  async getUser(id: number): Promise<User> {
    return await this.http.get<any>(`${this.userApi}/${id}`).toPromise();
  }
  delete(id: number): Observable<void>{
    return this.http.delete<any>(`${this.userApi}/id`);
  }

  create(user: User): Observable<void>{
    return this.http.post<any>(this.userApi, user);
  }

  update(user: User, id: number): Observable<User> {
    return this.http.put<any>(`${this.userApi}/${id}`, user);
  }
}
