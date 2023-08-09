import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MarvelResponse} from "../model/marvel-response";

@Injectable()
export class MarvelService {

  constructor(private http: HttpClient) {
  }

  public list(offset: number = 0): Observable<MarvelResponse> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + window.btoa('admin' + ':' + 'admin')
    }

    const url = 'http://localhost:8080/api/v1/marvel/characters?offset=' + offset
    return this.http.get<MarvelResponse>(url, {headers: new HttpHeaders(headerDict)})
  }

  public get(id: number): Observable<MarvelResponse> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + window.btoa('admin' + ':' + 'admin')
    }

    const url = 'http://localhost:8080/api/v1/marvel/characters/' + id
    return this.http.get<MarvelResponse>(url, {headers: new HttpHeaders(headerDict)})
  }

  public getItem(id: number, type: string): Observable<MarvelResponse> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + window.btoa('admin' + ':' + 'admin')
    }

    const url = this.getUrl(type) + id
    return this.http.get<MarvelResponse>(url, {headers: new HttpHeaders(headerDict)})
  }

  private getUrl(type: string) {
    switch (type) {
      case 'event':
        return 'http://localhost:8080/api/v1/marvel/events/'
      case 'comic':
        return 'http://localhost:8080/api/v1/marvel/comics/'
      case 'serie':
        return 'http://localhost:8080/api/v1/marvel/series/'
      case 'story':
        return 'http://localhost:8080/api/v1/marvel/stories/'
      default:
        return ''
    }
  }
}
