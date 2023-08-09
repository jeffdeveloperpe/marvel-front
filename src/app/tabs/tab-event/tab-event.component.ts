import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";
import {MarvelService} from "../../service/marvel.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {CharacterDetailComponent} from "../../character-detail/character-detail.component";
import {CharacterItemComponent} from "../../character-item/character-item.component";

@Component({
  selector: 'app-tab-event',
  templateUrl: './tab-event.component.html',
  providers: [DialogService]
})
export class TabEventComponent implements OnInit {

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
      header: 'Detalle de Evento',
      width: '70%',
      data: {
        id: value[value.length - 1],
        type: 'event'
      }
    })
  }
}
