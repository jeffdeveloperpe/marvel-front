import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";

@Component({
  selector: 'app-tab-story',
  templateUrl: './tab-story.component.html'
})
export class TabStoryComponent implements OnInit {

  @Input() character?: Character

  ngOnInit(): void {
  }
}
