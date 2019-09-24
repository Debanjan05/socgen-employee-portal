import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  private httpOptions: object;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'json'
    };
  }

  getMethod(url: string): Observable<any> {
    return this.http.get(url, this.httpOptions);
  }

  postMethod(url: string, jsonBody: any): Observable<any> {
    return this.http.post(url, jsonBody, this.httpOptions);
  }
}
