import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService{
  endpoint = `${environment.api}/users`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
