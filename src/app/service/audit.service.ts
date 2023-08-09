import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../model/page";
import {Audit} from "../model/audit";

@Injectable()
export class AuditService {

  constructor(private http: HttpClient) {
  }

  public list(page: number, size: number): Observable<Page<Audit>> {
    const url = 'http://localhost:8080/api/v1/audit?page=' + page + '&siz=' + size
    return this.http.get<Page<Audit>>(url);
  }
}
