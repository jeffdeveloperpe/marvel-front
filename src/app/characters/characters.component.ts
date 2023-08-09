import {Component, OnInit} from '@angular/core';
import {MarvelService} from "../service/marvel.service";
import {MarvelResponse} from "../model/marvel-response";
import {Character} from "../model/character";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  layout: string = 'grid'
  marvelResponse?: MarvelResponse
  results: Character[] = []
  limit = 20
  total = 1562
  offset = 0

  constructor(
    private service: MarvelService
  ) {
  }

  ngOnInit() {
    this.list()
  }

  onClickItem(character: any) {
    console.log(character)
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
    console.log('first: ' + value.first)
    this.offset = value.first
    console.log('nuevo valor de offset: ' + this.offset)
    this.list()
  }
}
