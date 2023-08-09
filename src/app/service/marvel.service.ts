import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MarvelResponse} from "../model/marvel-response";

@Injectable()
export class MarvelService {

  constructor(private http: HttpClient) {
  }

  public list(offset: number = 0): Observable<MarvelResponse> {
    const url = 'http://localhost:8080/api/v1/marvel/characters?offset=' + offset
    return this.http.get<MarvelResponse>(url)
  }

  public get(id: number): Observable<MarvelResponse> {
    const url = 'http://localhost:8080/api/v1/marvel/characters/' + id
    return this.http.get<MarvelResponse>(url)
  }

  public getItem(id: number, type: string): Observable<MarvelResponse> {
    const url = this.getUrl(type) + id
    return this.http.get<MarvelResponse>(url)
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
