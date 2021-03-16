import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestService{
  endpoint = `${environment.api}/products`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
