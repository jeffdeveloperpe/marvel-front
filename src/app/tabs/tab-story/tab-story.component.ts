import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";
import {CharacterItemComponent} from "../../character-item/character-item.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-tab-story',
  templateUrl: './tab-story.component.html'
})
export class TabStoryComponent implements OnInit {

  @Input() character?: Character

  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
  }

  onClick(resourceURI: string): void {
    const value = resourceURI.split('/')

    this.ref = this.dialogService.open(CharacterItemComponent, {
      header: 'Detalle de Story',
      width: '70%',
      data: {
        id: value[value.length - 1],
        type: 'story'
      }
    })
  }
}
