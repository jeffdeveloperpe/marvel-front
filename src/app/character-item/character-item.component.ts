import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {MarvelService} from "../service/marvel.service";

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html'
})
export class CharacterItemComponent implements OnInit {

  id?: number
  type?: string
  character?: Character

  constructor(
    private config: DynamicDialogConfig,
    private service: MarvelService
  ) {
  }

  ngOnInit(): void {
    this.id = this.config.data.id
    this.type = this.config.data.type

    this.service.getItem(this.id!, this.type!).subscribe({
      next: value => {
        this.character = value.data.results[0]
      },
      error: err => console.log(err)
    })
  }
}
