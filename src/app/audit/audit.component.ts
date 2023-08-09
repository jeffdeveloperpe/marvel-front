import {Component} from '@angular/core';
import {Page} from "../model/page";
import {Audit} from "../model/audit";
import {AuditService} from "../service/audit.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html'
})
export class AuditComponent {

  result?: Page<Audit>;
  items: Audit[] = [];
  page = 0;
  size = 50;
  loading = false;
  totalElements: number = 0;

  constructor(
    private service: AuditService
  ) {
  }

  loadUsersLazy(event: LazyLoadEvent): void {
    this.page = event.first! / this.size;
    this.list();
  }

  list(): void {
    this.service.list(this.page, this.size).subscribe(
      (page) => {
        this.handleData(page);
      },
      (error) => console.log(error)
    );
  }

  private handleData(data: Page<Audit>): void {
    this.result = data;
    this.items = data.content;
    this.totalElements = data.totalElements;
  }
}
