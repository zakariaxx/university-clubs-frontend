import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  // authUrl = 'http://localhost:8000/oauth/token';
  apiUrl = 'http://localhost:8000/api/';
  public  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  public getResource(resource){
    return this.http.get(this.apiUrl + resource);
  }


  public postResource(resource, data){
    return this.http.post(this.apiUrl + resource, data, this.httpOptions);
  }

  public updateResource(resource: string, data: any): Observable <Object> {
    return this.http.put(this.apiUrl+resource, data);
  }

  public deleteResource(resource:string,id: any): Observable<any> {
    return this.http.delete(this.apiUrl + resource + "/" + id);
  }
}
