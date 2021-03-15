import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserResponse} from '../interfaces/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roleApi = `${environment.api}/roles`;
  constructor(private http: HttpClient) { }
  async roles(): Promise<any>{
    const userResponse = await this.http.get<any>(`${this.roleApi}`).toPromise();
    return userResponse;
  }

  delete(id: number): Observable<void>{
    return this.http.delete<any>(this.roleApi);
  }
}
