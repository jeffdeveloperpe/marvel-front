import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";
import {CharacterItemComponent} from "../../character-item/character-item.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-tab-comic',
  templateUrl: './tab-comic.component.html'
})
export class TabComicComponent implements OnInit {

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
      header: 'Detalle de Comic',
      width: '70%',
      data: {
        id: value[value.length - 1],
        type: 'comic'
      }
    })
  }
}
