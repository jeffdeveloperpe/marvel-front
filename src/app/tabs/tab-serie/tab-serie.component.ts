import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";

@Component({
  selector: 'app-tab-serie',
  templateUrl: './tab-serie.component.html'
})
export class TabSerieComponent implements OnInit{

  @Input() character?: Character

  ngOnInit(): void {
  }
}
