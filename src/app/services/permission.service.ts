import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService extends RestService{
  endpoint = `${environment.api}/permissions`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
