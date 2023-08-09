import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";

@Component({
  selector: 'app-tab-comic',
  templateUrl: './tab-comic.component.html'
})
export class TabComicComponent implements OnInit {

  @Input() character?: Character

  ngOnInit(): void {
  }
}
