import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {MarvelService} from "../service/marvel.service";
import {Character} from "../model/character";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
})
export class CharacterDetailComponent implements OnInit {

  id?: number
  character?: Character

  constructor(
    private config: DynamicDialogConfig,
    private service: MarvelService
  ) {
  }

  ngOnInit(): void {
    this.id = this.config.data.id
    this.service.get(this.id!).subscribe({
      next: value => {
        this.character = value.data.results[0]
      },
      error: err => console.log(err)
    })
  }
}
