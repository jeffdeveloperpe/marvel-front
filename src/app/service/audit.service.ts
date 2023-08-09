import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../model/page";
import {Audit} from "../model/audit";

@Injectable()
export class AuditService {

  constructor(private http: HttpClient) {
  }

  public list(page: number, size: number): Observable<Page<Audit>> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + window.btoa('admin' + ':' + 'admin')
    }

    const url = 'http://localhost:8080/api/v1/audit?page=' + page + '&siz=' + size
    return this.http.get<Page<Audit>>(url, {headers: new HttpHeaders(headerDict)});
  }
}
