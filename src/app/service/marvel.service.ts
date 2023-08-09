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
}
