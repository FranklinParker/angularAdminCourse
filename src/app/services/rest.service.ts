import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export abstract class RestService {
  abstract get endpoint(): string;

  protected constructor(protected http: HttpClient) {
  }

  async all(page?: number): Promise<any> {
    let url = this.endpoint;
    if (page) {
      url += `?page=${page}`;
    }
    return await this.http.get(url).toPromise();
  }

  delete(id: number): Observable<void> {
    return this.http.delete<any>(`${this.endpoint}/${id}`);
  }

  create(data: any): Observable<void> {
    return this.http.post<any>(this.endpoint, data);
  }

  update(data: any, id: number): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/${id}`, data);
  }

  async get(id: number): Promise<any> {
    return await this.http.get<any>(`${this.endpoint}/${id}`).toPromise();
  }

}
