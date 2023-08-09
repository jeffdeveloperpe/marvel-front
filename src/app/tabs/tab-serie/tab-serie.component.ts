import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {CharacterItemComponent} from "../../character-item/character-item.component";

@Component({
  selector: 'app-tab-serie',
  templateUrl: './tab-serie.component.html',
  providers: [DialogService]
})
export class TabSerieComponent implements OnInit{

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
      header: 'Detalle de Serie',
      width: '70%',
      data: {
        id: value[value.length - 1],
        type: 'serie'
      }
    })
  }
}
