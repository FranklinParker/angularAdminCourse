import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserResponse} from '../interfaces/UserResponse';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService{
  endpoint = `${environment.api}/orders`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
