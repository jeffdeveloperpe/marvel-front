import {Component, ViewChild} from '@angular/core';
import {AuditComponent} from "./audit/audit.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild(AuditComponent) auditComponent?: AuditComponent;

  onTabChange(event: any): void {
    if (event.index === 1) {
      this.auditComponent!.list()
    }
  }
}
