import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";

@Component({
  selector: 'app-tab-information',
  templateUrl: './tab-information.component.html'
})
export class TabInformationComponent implements OnInit {

  @Input() character?: Character

  ngOnInit(): void {
  }
}
