import {NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TabViewModule} from "primeng/tabview";
import {CharactersComponent} from './characters/characters.component';
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import {FormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";
import {CardModule} from "primeng/card";
import {MarvelService} from "./service/marvel.service";
import {HttpClientModule} from "@angular/common/http";
import {ScrollTopModule} from "primeng/scrolltop";

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    RatingModule,
    TagModule,
    DataViewModule,
    FormsModule,
    PaginatorModule,
    CardModule,
    HttpClientModule,
    ScrollTopModule
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
