import {Component, OnInit} from '@angular/core';
import {MarvelService} from "../service/marvel.service";
import {MarvelResponse} from "../model/marvel-response";
import {Character} from "../model/character";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {CharacterDetailComponent} from "../character-detail/character-detail.component";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  providers: [DialogService]
})
export class CharactersComponent implements OnInit {

  layout: string = 'grid'
  marvelResponse?: MarvelResponse
  results: Character[] = []
  limit = 20
  total = 1562
  offset = 0

  ref: DynamicDialogRef | undefined;

  constructor(
    private service: MarvelService,
    public dialogService: DialogService
  ) {
  }

  ngOnInit() {
    this.list()
  }

  onClickItem(character: any) {
    this.ref = this.dialogService.open(CharacterDetailComponent, {
      header: 'Detalle',
      width: '70%',
      data: {
        id: character.id
      }
    })
  }

  private list(): void {
    this.service.list(this.offset).subscribe({
      next: value => {
        this.marvelResponse = value
        this.results = this.marvelResponse.data.results
        this.limit = this.marvelResponse.data.limit
        this.total = this.marvelResponse.data.total

        console.log('total: ' + this.total)
        console.log('limit: ' + this.limit)
      },
      error: err => console.log(err)
    })
  }

  onLazyLoad(value: any): void {
    this.offset = value.first
    this.list()
  }
}
